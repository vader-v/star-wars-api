import { Routes, Route } from 'react-router-dom'
import './App.css'
import Starships from './components/Starships/Starships'

function App() {

  return (
    <>
    <Starships />
    <Routes>
      <Route path='/' element={<App />}/>
    </Routes>
    </>
  )
}

export default App
