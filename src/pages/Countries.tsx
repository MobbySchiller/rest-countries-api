import { FC } from 'react'
import SearcherFilter from '../components/SearcherFilter'
import Cards from '../components/Cards'
import CardsLoader from '../components/CardsLoader'


const Countries: FC<{ isLoaded: boolean }> = ({ isLoaded }) => {

    return (
        <>
            <SearcherFilter />
            {isLoaded ? <Cards /> : <CardsLoader />}
        </>
    )
}

export default Countries