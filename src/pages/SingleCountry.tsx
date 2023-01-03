import { FC } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SingleCountry: FC = () => {

    return (
        <main>
            <button
                className='my-12 px-8 py-2 rounded-md bg-light-elements dark:bg-dark-elements'
                style={{ boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}>
                <ArrowBackIcon />
                Back
            </button>
            <div className='md:flex md:gap-20'>
                <div className='w-full md:w-2/5 aspect-[3/2]' style={{ backgroundColor: 'red' }}></div>
                <div className='md:grow md:self-center'>
                    <h2 className='my-6 text-2xl font-extrabold'>Name</h2>
                    <div className='md:flex text-sm font-semibold'>
                        <div className='md:w-1/2'>
                            <p className='mb-1'>Native Name: <span></span></p>
                            <p className='mb-1'>Population: <span></span></p>
                            <p className='mb-1'>Region: <span></span></p>
                            <p className='mb-1'>Sub Region: <span></span></p>
                            <p className='mb-1'>Capital: <span></span></p>
                        </div>
                        <div>
                            <p className='mb-1'>Top Level Domain: <span></span></p>
                            <p className='mb-1'>Currencies: <span></span></p>
                            <p className='mb-1'>Languages: <span></span></p>
                        </div>
                    </div>
                    <div className='lg:flex lg:items-center mt-6'>
                        <span className='mr-3 font-semibold'>Border Countries:</span>
                        <div className='flex justify-between sm:justify-start gap-2'>
                            <button
                                className='px-6 py-2 rounded-md bg-light-elements dark:bg-dark-elements'
                                style={{ boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}
                            >Country</button>
                            <button
                                className='px-6 py-2 rounded-md bg-light-elements dark:bg-dark-elements'
                                style={{ boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}
                            >Country</button>
                            <button
                                className='px-6 py-2 rounded-md bg-light-elements dark:bg-dark-elements'
                                style={{ boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}
                            >Country</button>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default SingleCountry