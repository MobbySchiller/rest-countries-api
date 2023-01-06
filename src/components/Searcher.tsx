import React, { FC } from 'react'
import { SearchType } from './SearcherFilter';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const Searcher: FC<{ search: SearchType }> = ({ search }) => {
    const { searchValue, setSearchValue } = search

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)

    return (
        <TextField
            className='bg-light-elements dark:bg-dark-elements'
            placeholder='Search for a country...'
            value={searchValue}
            onChange={handleChange}
            InputProps={{
                startAdornment: (
                    <InputAdornment
                        position="start">
                        <SearchIcon className='dark:text-dark-text' />
                    </InputAdornment>
                ),
            }}
        />
    )
}

export default Searcher