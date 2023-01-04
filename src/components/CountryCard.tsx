import { FC } from 'react'

interface Info {
    name: string
    population: string
    region: string
    capital: string
    flags: {
        svg: string,
        png: string
    }
}

// interface Flags {
//     svg: string
// }

const CountryCard: FC<{ info: Info }> = ({ info }) => {
    const { name, population, region, capital, flags } = info

    return (
        <div
            className='place-self-center w-60 h-80 rounded-md bg-light-elements dark:bg-dark-elements'
            style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
            <div
                className='w-full h-36 rounded-t-md'
                style={{
                    backgroundColor: '#ccc',
                    backgroundImage: `url(${flags.svg})`,
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
    )
}

export default CountryCard