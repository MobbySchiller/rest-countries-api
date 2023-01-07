import { FC } from 'react'
import { useShopSelector } from '../shop/hooks'
import CountryCard from './CountryCard'

const Cards: FC = () => {
    const countriesToDisplay = useShopSelector(state => state.display.display)

    const countryCards = countriesToDisplay.map((country: any) => {
        const { name, population, region, capital, flag } = country
        return (
            <CountryCard key={name} info={{ name, population, region, capital, flag }} />
        )
    })

    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {countryCards}
        </div>
    )
}

export default Cards