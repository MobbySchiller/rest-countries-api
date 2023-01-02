import { FC, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon as lightMoon } from '@fortawesome/free-regular-svg-icons'
import { faMoon as darkMoon } from '@fortawesome/free-solid-svg-icons'

const Header: FC = () => {
    const [isLightMode, setIsLightMode] = useState<boolean>(true)

    const handleDisplayMode = () => {
        const dom = document.querySelector('html')
        dom?.classList.toggle('dark')
        setIsLightMode(!isLightMode)
    }

    return (
        <header
            className='w-full px-2 py-6 bg-light-elements dark:bg-dark-elements'
            style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
            <div className='max-w-6xl mx-auto flex justify-between text-light-text dark:text-dark-text'>
                <h1
                    className='md:text-xl font-extrabold'>
                    Where in the world?
                </h1>
                <button
                    className='font-semibold flex items-center'
                    onClick={handleDisplayMode}>
                    <FontAwesomeIcon
                        className='pr-1 md:pr-2'
                        icon={isLightMode ? lightMoon : darkMoon} />
                    Dark Mode
                </button>
            </div>
        </header >
    )
}

export default Header