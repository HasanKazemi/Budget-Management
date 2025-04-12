import './App.css'
import Menu from './components/Menu'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-[#0E091B] via-[#150F30] to-[#2A2FA8] text-white p-7 flex'>
      <Menu />
      <Outlet />
    </div>
  )
}

export default App
