import './App.css'
import { Navbar } from './components' 
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='main_container'>
      <Navbar />
      <main className="main_content">
        <Outlet />
      </main>
    </div>
  )
}

export default App
