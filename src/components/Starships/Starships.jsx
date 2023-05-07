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
  console.log(starshipList)
  if (!starshipList) return <h1>Loadign starsips,.. </h1>

  return ( 
    <main className="starship-list">
      <h1>Starship List (Whooshooosh)</h1>
        {starshipList.map((starship, idx) =>
          <div key={idx} className="link-container">
            <Link to={`/starships/${starship._id}`}>
              {starship.name}
            </Link>
          </div>
        )}
    </main>
  )
}

export default Starships