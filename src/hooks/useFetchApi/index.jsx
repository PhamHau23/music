import { useEffect, useState } from "react"
const api = import.meta.env.VITE_API_URL

function useFetchApi(url){

    const [data, setData] = useState([])
    console.log(url)

    useEffect(() => {
        (async() => {
            const response = await fetch(`${api}${url}`)
            const data = await response.json()
            setData(data)        
        })()
    }, [url])

    return data
}

export default useFetchApi