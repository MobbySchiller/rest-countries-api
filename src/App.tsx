import { FC } from 'react'
import Header from './components/Header'
import Main from './components/Main'

const App: FC = () => {
  return (
    <div className='w-full min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text font-nunito'>
      <Header />
      <Main />
    </div>
  )
}

export default App
