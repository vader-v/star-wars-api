import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/:starshipId'/>
    </Routes>
    </>
  )
}

export default App
