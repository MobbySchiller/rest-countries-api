import { FC } from 'react'
import { useShopSelector, useShopDispatch } from '../shop/hooks'
import { selectorsActions } from '../shop/selectorsSlice';
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const Filter: FC = () => {
    const filterValue = useShopSelector(state => state.selectors.filter)
    const dispatch = useShopDispatch()

    const regions: string[] = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

    const selectOptions = regions.map(region => (
        <MenuItem key={region} value={region}>{region}</MenuItem>
    ))

    const handleChange = (event: SelectChangeEvent<string>) => {
        const value = event.target.value
        dispatch(selectorsActions.changeFilter({ value }))
    }

    return (
        <div className='mt-6 sm:mt-0'>
            <FormControl className='w-45'>
                <Select
                    className='bg-light-elements dark:bg-dark-elements dark:text-dark-text'
                    value={filterValue !== '' ? filterValue : ''}
                    onChange={handleChange}
                    displayEmpty
                >
                    <MenuItem value='' disabled>Filter by Region</MenuItem>
                    {selectOptions}
                </Select>
            </FormControl>
        </div >
    )
}
export default Filter