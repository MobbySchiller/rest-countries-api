import React, { FC } from 'react'
import { useShopSelector, useShopDispatch } from '../shop/hooks'
import { selectorsActions } from '../shop/selectorsSlice';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const Searcher: FC = () => {
    const searchValue = useShopSelector(state => state.selectors.search)
    const dispatch = useShopDispatch()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        dispatch(selectorsActions.changeSearch({ value }))
    }

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