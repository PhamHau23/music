import axios from "axios"

const api = import.meta.env.VITE_API_URL

const fetchSearchApi = async (endPoint) => {
    const songs = await axios.get(`${api}${endPoint}`)
    return songs.data
}

export default fetchSearchApi