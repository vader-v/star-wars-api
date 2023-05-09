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

  if (!starshipList) return <h1>Loadign starsips,.. </h1>

  return ( 
    <>
    <main className="starship-list">
      <h1>Starship List (Whooshooosh)</h1>
        {starshipList.map(starship =>
          <Link 
          key={starship.name}
          to={`/starships/${starship.url.split('/')[5]}`}
          >
            <StarshipCard starship={starship} />
          </Link>
        )}
    </main>
    </>
  )
}

export default Starships