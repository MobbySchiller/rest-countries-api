import { FC, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Header: FC = () => {
    const [isLightMode, setIsLightMode] = useState<boolean>(true)

    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsLightMode(false)
        }
    }, [])

    useEffect(() => {
        const dom = document.querySelector('html')
        dom?.classList.toggle('dark')
    }, [isLightMode])

    return (
        <header
            className='w-full px-2 py-6 bg-light-elements dark:bg-dark-elements'
            style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
            <div className='max-w-6xl mx-auto flex justify-between'>
                <NavLink to='/'>
                    <h1
                        className='md:text-xl font-extrabold cursor-pointer'>
                        Where in the world?
                    </h1>
                </NavLink>
                <button
                    className='font-semibold flex items-center'
                    onClick={() => setIsLightMode(!isLightMode)}>
                    {isLightMode ? <DarkModeIcon /> : <LightModeIcon />}
                    <span className='pl-1'>{isLightMode ? 'Dark Mode' : 'Light Mode'}</span>
                </button>
            </div>
        </header >
    )
}

export default Header