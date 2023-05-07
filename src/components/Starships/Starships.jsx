// npm modules
import { useEffect, useState } from "react"
import { getAllStarships } from "../../services/sw-api"
import { Link } from 'react-router-dom'

const Starships = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchAllStarships = async () => {
      const starshipData = await 
      getAllStarships()
      setStarshipList(starshipData)
    }
    fetchAllStarships()
  }, [])

  if (!starshipList.length) return <h1>Loadign starsips,.. </h1>

  return ( 
    <main className="starship-list">
      <h1>Starship List (Whooshooosh)</h1>
        {starshipList.map(starship =>
          <div key={starship._id} className="link-container">
            <Link to={`/${starship._id}`}>
              {starship.name}
            </Link>
          </div>
        )}
    </main>
  )
}

export default Starships