import { FC } from 'react'
import Header from './components/Header'

const App: FC = () => {
  return (
    <div className='w-full min-h-screen bg-light-background dark:bg-dark-background font-nunito'>
      <Header />
    </div>
  )
}

export default App
