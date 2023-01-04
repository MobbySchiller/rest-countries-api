import React, { FC } from 'react'
import Searcher from './Searcher'
import Filter from './Filter'

export interface SearchType {
    searchValue: string
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

export interface FilterType {
    filterValue: string
    setFilterValue: React.Dispatch<React.SetStateAction<string>>
}

const SearcherFilter: FC<{ search: SearchType, filter: FilterType }> = ({ search, filter }) => {

    return (
        <div className='flex flex-col sm:flex-row sm:justify-between max-w-6xl mx-auto px-2 md:px-0 py-4 sm:py-6'>
            <Searcher search={search} />
            <Filter filter={filter} />
        </div>
    )
}

export default SearcherFilter