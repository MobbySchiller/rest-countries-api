import { FC, useEffect, useState } from 'react'
import SearcherFilter from '../components/SearcherFilter'
import Cards from '../components/Cards'

const API: string = 'https://restcountries.com/v2/'
const FIELDS: string = '?fields=name,population,region,capital,flags'

const Countries: FC = () => {
    const [countriesToDisplay, setCountriesToDisplay] = useState([])
    const [searchValue, setSearchValue] = useState<string>('')
    const [filterValue, setFilterValue] = useState<string>('')

    useEffect(() => {
        fetch(`${API}all${FIELDS}`)
            .then(resp => resp.json())
            .then(data => setCountriesToDisplay(data))
    }, [])

    useEffect(() => {
        setFilterValue('')
        if (searchValue !== '') {
            fetch(`${API}name/${searchValue}${FIELDS}`)
                .then(resp => resp.json())
                .then(data => setCountriesToDisplay(data))
        } else {
            fetch(`${API}all${FIELDS}`)
                .then(resp => resp.json())
                .then(data => setCountriesToDisplay(data))
        }
    }, [searchValue])

    useEffect(() => {
        setSearchValue('')
        if (filterValue === '') return
        if (filterValue !== 'All') {
            fetch(`${API}region/${filterValue}${FIELDS}`)
                .then(resp => resp.json())
                .then(data => setCountriesToDisplay(data))
        } else {
            fetch(`${API}all${FIELDS}`)
                .then(resp => resp.json())
                .then(data => setCountriesToDisplay(data))
        }
    }, [filterValue])

    return (
        <main className='max-w-6xl mx-auto px-4'>
            <SearcherFilter search={{ searchValue, setSearchValue }} filter={{ filterValue, setFilterValue }} />
            <Cards countriesToDisplay={countriesToDisplay} />
        </main>
    )
}

export default Countries