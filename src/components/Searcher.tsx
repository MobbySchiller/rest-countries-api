import { FC } from 'react'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const Searcher: FC = () => {
    return (
        <TextField
            className='bg-light-elements dark:bg-dark-elements'
            placeholder='Search for a country...'
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