import { FC, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useShopSelector, useShopDispatch } from '../shop/hooks'
import { displayActions } from '../shop/displaySlice';
import Countries from '../pages/Countries'
import SingleCountry from '../pages/SingleCountry';

export const API: string = 'https://restcountries.com/v2/'
export const FIELDS: string = '?fields=name,population,region,subregion,capital,flag,nativeName,languages,currencies,borders,topLevelDomain,alpha3Code'

const Main: FC = () => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [allCountries, setAllCountries] = useState([])
    const searchValue = useShopSelector(state => state.selectors.search)
    const filterValue = useShopSelector(state => state.selectors.filter)
    const dispatch = useShopDispatch()

    const getAllCountries = async () => {
        const response = await fetch(`${API}all${FIELDS}`)
        if (!response.ok) {
            throw new Error('Error')
        }
        const data = await response.json()
        dispatch(displayActions.changeDisplay({ data }))
        setAllCountries(data)
        setIsLoaded(true)
        return
    }

    const getSelectedCountries = () => {
        let toDisplay = allCountries
        if (searchValue !== '') {
            const enteredLetters = searchValue.toLowerCase()
            toDisplay = toDisplay.filter((country: any) => {
                const countryLower = country.name.toLowerCase()
                return countryLower.includes(enteredLetters)
            })
        }
        if (filterValue === '' || filterValue === 'All') {
            dispatch(displayActions.changeDisplay({ data: toDisplay }))
        } else {
            toDisplay = toDisplay.filter((country: any) => country.region === filterValue)
            dispatch(displayActions.changeDisplay({ data: toDisplay }))
        }
    }

    useEffect(() => {
        getAllCountries()
    }, [])

    useEffect(() => {
        getSelectedCountries()
    }, [searchValue, filterValue])

    const routes = allCountries.map(country => {
        const { alpha3Code } = country
        return (
            <Route key={alpha3Code} path={`/${alpha3Code}`} element={<SingleCountry info={country} />} />
        )
    })

    return (
        <main className='max-w-6xl mx-auto px-4'>
            <Routes>
                <Route path='/' element={<Countries isLoaded={isLoaded} />} />
                {routes}
            </Routes>
        </main>
    )
}

export default Main