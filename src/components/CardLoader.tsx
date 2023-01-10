import { FC } from 'react'

const LoaderCard: FC = () => {

    return (
        <div
            className='place-self-center w-60 h-80 rounded-md bg-light-elements dark:bg-dark-elements'
            style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
            <div className='animate-pulse'>
                <div
                    className='w-full h-36 rounded-t-md bg-light-border'>
                </div>
                <div className='p-5'>
                    <div className='block w-32 h-3 mb-6 rounded-xl bg-light-border'></div>
                    <div className='block w-36 h-3 mb-3 rounded-xl bg-light-border'></div>
                    <div className='block w-24 h-3 mb-3 rounded-xl bg-light-border'></div>
                    <div className='block w-28 h-3 rounded-xl bg-light-border'></div>
                </div>
            </div>
        </div >
    )
}

export default LoaderCard