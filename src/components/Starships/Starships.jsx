// npm modules
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import StarshipCard from "./StarshipCard"
import * as starshipService from '../../services/sw-api'

const Starships = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarships = async () => {
      const starshipData = await starshipService.index()
      setStarshipList(starshipData.results)
    }
    fetchStarships()
  }, [])

  if (!starshipList.length) return <h1>Loading starships.,.. </h1>

  return ( 
    <>
    <main className="starship-list">
      <h1>Starship List (Whooshooosh)</h1>
        {starshipList.map(starship =>
        <button key={starship.name}>
          <Link 
            to={`/starships/${starship.url.split('/')[5]}`}
            >
            <StarshipCard starship={starship} />
          </Link>
            </button>
        )}
    </main>
    </>
  )
}

export default Starships