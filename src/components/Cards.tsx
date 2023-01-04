import { FC } from 'react'
import CountryCard from './CountryCard'

const Cards: FC<{ countriesToDisplay: any }> = ({ countriesToDisplay }) => {

    const countryCards = countriesToDisplay.map((country: any) => {
        const { name, population, region, capital, flags } = country
        return (
            <CountryCard key={name} info={{ name, population, region, capital, flags }} />
        )
    })

    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {countryCards}
        </div>
    )
}

export default Cards