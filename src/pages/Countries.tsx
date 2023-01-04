import { FC, useEffect, useState } from 'react'
import SearcherFilter from '../components/SearcherFilter'
import Cards from '../components/Cards'

const Countries: FC = () => {
    const [countriesToDisplay, setCountriesToDisplay] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(resp => resp.json())
            .then(data => setCountriesToDisplay(data))
    }, [])

    return (
        <main className='max-w-6xl mx-auto px-4'>
            <SearcherFilter />
            <Cards countriesToDisplay={countriesToDisplay} />
        </main>
    )
}

export default Countries