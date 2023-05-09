import { Routes, Route } from 'react-router-dom'
import './App.css'
import Starships from './components/Starships/Starships'
import StarshipDetails from './components/Starships/StarshipDetails'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Starships />}/>
      <Route path={'/starships/:starshipId'} element={<StarshipDetails />}/>
    </Routes>
    </>
  )
}

export default App
