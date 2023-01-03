import { FC } from 'react'
import SearcherFilter from '../components/SearcherFilter'
import Cards from '../components/Cards'

const Countries: FC = () => {

    return (
        <main className='max-w-6xl mx-auto px-4'>
            <SearcherFilter />
            <Cards />
        </main>
    )
}

export default Countries