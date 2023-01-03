import { FC } from 'react'

const CountryCard: FC = () => {

    return (
        <div
            className='place-self-center w-60 h-80 rounded-md bg-light-elements dark:bg-dark-elements'
            style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
            <div
                className='w-full h-36 rounded-t-md'
                style={{ backgroundColor: 'blue' }}></div>
            <div className='p-5 text-light-text dark:text-dark-text'>
                <h2 className='mb-4 font-extrabold'>United States of America</h2>
                <p className='font-semibold text-sm mb-1'>Population: <span className='font-normal'>123123</span></p>
                <p className='font-semibold text-sm mb-1'>Region: <span className='font-normal'>Testowo</span></p>
                <p className='font-semibold text-sm'>Capital: <span className='font-normal'>Test</span></p>
            </div>
        </div>
    )
}

export default CountryCard