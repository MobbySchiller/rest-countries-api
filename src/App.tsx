import { FC } from 'react'
import Header from './components/Header'
import SearcherFilter from './components/SearcherFilter'

const App: FC = () => {
  return (
    <div className='w-full min-h-screen bg-light-background dark:bg-dark-background font-nunito'>
      <Header />
      <SearcherFilter />
    </div>
  )
}

export default App
