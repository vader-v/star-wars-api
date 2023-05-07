import { Routes, Route } from 'react-router-dom'
import './App.css'
import Starships from './components/Starships/Starships'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Starships />}/>
    </Routes>
    </>
  )
}

export default App
