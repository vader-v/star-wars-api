import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

import { getStarship } from "../../services/sw-api"

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const { starshipId } = useParams()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getStarship(starshipId)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [starshipId] )

  if (!starshipDetails.length) return <h1>Loading starship Details,.. </h1>

  return (
    <main>
        <h1>Starship details</h1>
        <h2>Starship Name:       {starshipDetails.name}</h2>
        <p>Model: {starshipDetails.model}</p>
        <p>Manufacturer: {starshipDetails.manufacturer}</p>
        <p>Cost In Credits: {starshipDetails.cost_in_credits}</p>
        <p> Starship Class: {starshipDetails.starship_class}
        </p>
        <p>Hyperdrive Rating: {starshipDetails.hyperdrive_rating}</p>
        <button><Link to={'/'}>Return</Link></button>
      
    </main>
  )
}

export default StarshipDetails