import { FC, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useShopSelector, useShopDispatch } from '../shop/hooks'
import { displayActions } from '../shop/displaySlice';
import Countries from '../pages/Countries'

export const API: string = 'https://restcountries.com/v2/'
export const FIELDS: string = '?fields=name,population,region,capital,flag'



const Main: FC = () => {
    const [allCountries, setAllCountries] = useState([])
    // const [countriesToDisplay, setCountriesToDisplay] = useState([])
    const searchValue = useShopSelector(state => state.selectors.search)
    const filterValue = useShopSelector(state => state.selectors.filter)
    const countriesToDisplay = useShopSelector(state => state.display.display)
    const dispatch = useShopDispatch()

    const getAllCountries = async () => {
        const response = await fetch(`${API}all${FIELDS}`)
        if (!response.ok) {
            throw new Error('Error')
        }
        const data = await response.json()
        dispatch(displayActions.changeDisplay({ data }))
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
            dispatch(displayActions.changeDisplay({ data: toDisplay }))
        } else {
            toDisplay = toDisplay.filter(country => country.region === filterValue)
            dispatch(displayActions.changeDisplay({ data: toDisplay }))
        }
    }

    useEffect(() => {
        getAllCountries()
    }, [])

    useEffect(() => {
        getSelectedCountries()
    }, [searchValue, filterValue])

    return (
        <Routes>
            <Route path='/' element={<Countries />} />
        </Routes>
    )
}

export default Main