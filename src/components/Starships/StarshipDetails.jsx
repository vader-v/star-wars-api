import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

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
  return (
    <main>
      <h1>Starship details</h1>
      <h2>Name: {starshipDetails.name}</h2>
      <h3>Model: {starshipDetails.model}</h3>
    </main>
  )
}

export default StarshipDetails