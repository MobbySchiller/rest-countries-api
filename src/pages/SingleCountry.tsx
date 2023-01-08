import { FC } from 'react'
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Info {
    name: string
    population: string
    region: string
    subregion: string
    capital: string
    flag: string
    nativeName: string
    currencies: any
    languages: any
    topLevelDomain: string
    borders: string[]
}


const SingleCountry: FC<{ info: Info }> = ({ info }) => {
    const { name, population, region, subregion, capital, flag, nativeName, currencies, languages, topLevelDomain, borders } = info

    const stateCurrencies = () => {
        if (!currencies) return false
        const allCurrencies = currencies.map((currency: any) => <span key={currency.code}>{currency.name.toLowerCase()} </span>)
        return allCurrencies
    }

    const stateLanguages = () => {
        if (!languages) return false
        const allLanguages = languages.map((language: any) => <span key={language.iso639_1}>{language.name.toLowerCase()}, </span>)
        return allLanguages
    }

    const stateBorders = () => {
        if (!borders) return false
        const allBorders = borders.map((border: string) => (
            <NavLink to={`/${border}`}>
                <button
                    key={border}
                    className='px-6 py-2 rounded-md bg-light-elements dark:bg-dark-elements'
                    style={{ boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}
                >{border}</button>
            </NavLink>
        ))
        return allBorders
    }

    return (
        <main>
            <button
                className='my-12 px-8 py-2 rounded-md bg-light-elements dark:bg-dark-elements'
                style={{ boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}
                onClick={() => history.back()}>
                <ArrowBackIcon />
                Back
            </button>
            <div className='md:flex md:gap-20'>
                <div
                    className='w-full md:w-2/5 aspect-[3/2]'
                    style={{
                        backgroundImage: `url(${flag})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'contain'
                    }}></div>
                <div className='md:grow md:self-center'>
                    <h2 className='my-6 text-2xl font-extrabold'>{name}</h2>
                    <div className='md:flex text-sm font-semibold'>
                        <div className='md:w-1/2'>
                            <p className='mb-1'>Native Name: <span>{nativeName}</span></p>
                            <p className='mb-1'>Population: <span>{population}</span></p>
                            <p className='mb-1'>Region: <span>{region}</span></p>
                            <p className='mb-1'>Sub Region: <span>{subregion}</span></p>
                            <p className='mb-1'>Capital: <span>{capital}</span></p>
                        </div>
                        <div>
                            <p className='mb-1'>Top Level Domain: <span>{topLevelDomain}</span></p>
                            <p className='mb-1'>Currencies: {currencies ? stateCurrencies() : <span>No currencies</span>}</p>
                            <p className='mb-1'>Languages: {languages ? stateLanguages() : <span>No languages</span>}</p>
                        </div>
                    </div>
                    <div className='lg:flex lg:items-center mt-6'>
                        <span className='mr-3 font-semibold'>Border Countries:</span>
                        <div className='flex flex-wrap justify-between sm:justify-start gap-2'>
                            {borders ? stateBorders() : <span>No land borders</span>}
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default SingleCountry