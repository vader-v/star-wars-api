const baseUrl = 'https://swapi.dev/api'

export async function index() {
  try {
    const res = await fetch(`${baseUrl}/starships`)
    console.log('response', res)
    return res.json() 
  } catch (err) {
    console.log(err)
  }
}

export async function getStarship(starshipId) {
  const res = await fetch(`${baseUrl}/starships/${starshipId}`)
  console.log("starshipId", starshipId)
  return res.json()
}
