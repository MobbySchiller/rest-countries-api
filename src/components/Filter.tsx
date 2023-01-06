import { FC } from 'react'
import { FilterType } from './SearcherFilter';
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const Filter: FC<{ filter: FilterType }> = ({ filter }) => {
    const { filterValue, setFilterValue } = filter

    const regions: string[] = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

    const selectOptions = regions.map(region => (
        <MenuItem key={region} value={region}>{region}</MenuItem>
    ))

    const handleChange = (event: SelectChangeEvent<string>) => setFilterValue(event.target.value)

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