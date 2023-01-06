import { FC, useEffect, useState } from 'react'
import SearcherFilter from '../components/SearcherFilter'
import Cards from '../components/Cards'

export const API: string = 'https://restcountries.com/v2/'
export const FIELDS: string = '?fields=name,population,region,capital,flags'

interface Country {
    name: string
    population: string
    region: string
    capital: string
    flags: {
        svg: string
        png: string
    }
}

const Countries: FC = () => {
    const [allCountries, setAllCountries] = useState<Country[]>([])
    const [countriesToDisplay, setCountriesToDisplay] = useState<Country[]>([])
    const [searchValue, setSearchValue] = useState<string>('')
    const [filterValue, setFilterValue] = useState<string>('')

    const getAllCountries = async () => {
        const response = await fetch(`${API}all${FIELDS}`)
        if (!response.ok) {
            throw new Error('Error')
        }
        const data = await response.json()
        setCountriesToDisplay(data)
        return setAllCountries(data)
    }

    const getSelectedCountries = () => {
        let toDisplay = allCountries
        if (searchValue !== '') {
            const enteredLetters = searchValue.toLowerCase()
            toDisplay = toDisplay.filter(country => {
                const countryLower = country.name.toLowerCase()
                return countryLower.includes(enteredLetters)
            })
        }
        if (filterValue === '' || filterValue === 'All') {
            setCountriesToDisplay(toDisplay)
        } else {
            toDisplay = toDisplay.filter(country => country.region === filterValue)
            setCountriesToDisplay(toDisplay)
        }
    }

    useEffect(() => {
        getAllCountries()
    }, [])

    useEffect(() => {
        getSelectedCountries()
        console.log(countriesToDisplay)
    }, [searchValue, filterValue])

    return (
        <main className='max-w-6xl mx-auto px-4'>
            <SearcherFilter
                search={{ searchValue, setSearchValue }}
                filter={{ filterValue, setFilterValue }} />
            <Cards countriesToDisplay={countriesToDisplay} />
        </main>
    )
}

export default Countries