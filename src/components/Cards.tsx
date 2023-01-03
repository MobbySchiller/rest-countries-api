import { FC } from 'react'
import CountryCard from './CountryCard'

const Cards: FC = () => {

    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            <CountryCard />
        </div>
    )
}

export default Cards