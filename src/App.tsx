import { FC } from 'react'
import Header from './components/Header'
import Countries from './pages/Countries'

const App: FC = () => {
  return (
    <div className='w-full min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text font-nunito'>
      <Header />
      <Countries />
    </div>
  )
}

export default App
