import { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface Info {
    name: string
    population: string
    region: string
    capital: string
    flag: string
    alpha3Code: string
}

const CountryCard: FC<{ info: Info }> = ({ info }) => {
    const { name, population, region, capital, flag, alpha3Code } = info

    return (
        <div className='place-self-center'>
            <NavLink to={`/${alpha3Code}`}>
                <div
                    className='w-60 h-80 rounded-md bg-light-elements dark:bg-dark-elements hover:cursor-pointer hover:scale-105'
                    style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                    <div
                        className='w-full h-36 border-b-2 border-light-border rounded-t-md'
                        style={{
                            backgroundImage: `url(${flag})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}>
                    </div>

                    <div className='p-5 text-light-text dark:text-dark-text'>
                        <h2 className='mb-4 font-extrabold'>{name}</h2>
                        <p className='font-semibold text-sm mb-1'>Population: <span className='font-normal'>{population}</span></p>
                        <p className='font-semibold text-sm mb-1'>Region: <span className='font-normal'>{region}</span></p>
                        <p className='font-semibold text-sm'>Capital: <span className='font-normal'>{capital}</span></p>
                    </div>
                </div>
            </NavLink>
        </div >
    )
}

export default CountryCard