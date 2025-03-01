import { Route, Routes } from 'react-router-dom'
import Auth from './Authorization/Auth'



function App() {

  return (
    <>
    
      <Routes>
      <Route path='/' element={<Auth register/>} />
      <Route path='/login' element={<Auth />} />
      </Routes>
    </>
  )
}

export default App
