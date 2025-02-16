const api = import.meta.env.VITE_API_URL

const fetchSearchApi = async (endPoint) => {
    const response = await fetch(`${api}${endPoint}`)
    const songs = response.json()
    return songs
}

export default fetchSearchApi