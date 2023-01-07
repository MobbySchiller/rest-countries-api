import React, { FC } from 'react'
import Searcher from './Searcher'
import Filter from './Filter'

const SearcherFilter: FC = () => {

    return (
        <div className='flex flex-col sm:flex-row sm:justify-between max-w-6xl mx-auto px-2 md:px-0 py-4 sm:py-6'>
            <Searcher />
            <Filter />
        </div>
    )
}

export default SearcherFilter