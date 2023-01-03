import React, { FC, useState } from 'react'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'


const Filter: FC = () => {
    const [selectedRegion, setSelectedRegion] = useState<string>('')
    const regions: string[] = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania']

    const selectOptions = regions.map(region => (
        <MenuItem value={region}>{region}</MenuItem>
    ))

    const handleChange = (e: SelectChangeEvent<string>) => {
        setSelectedRegion(e.target.value)
    }

    return (
        <div className='mt-6 sm:mt-0'>
            <FormControl className='w-45'>
                <Select
                    className='bg-light-elements dark:bg-dark-elements dark:text-dark-text'
                    value={selectedRegion}
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