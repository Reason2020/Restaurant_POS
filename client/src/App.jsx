import './App.css'
import { Navbar } from './components' 
import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux' 

function App() {
  const { currentTheme } = useSelector((state) => state.theme)

  return (
    <motion.div
      animate={{
        backgroundColor: currentTheme === 'light' ? 'var(--light-background)' : 'var(--dark-background)',
        transition: {
          duration: 0.25
        }
      }}
      className='main_container'>
      <Navbar />
      <main className="main_content">
        <Outlet />
      </main>
    </motion.div>
  )
}

export default App
