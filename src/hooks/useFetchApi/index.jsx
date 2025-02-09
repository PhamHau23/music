import { useEffect, useState } from "react"
const api = import.meta.env.VITE_API_URL

function useFetchApi(url, option){

    const [data, setData] = useState([])

    useEffect(() => {
        (async() => {
            const newLocal = option && option
            const response = await fetch(`${api}${url}`, newLocal)
            if (!response.ok && response.status === 500) {
                throw new Error('Lỗi server. Vui lòng thử lại sau.');
            }
            const data = await response.json()
            setData(data)        
        })()
    }, [url])

    return data
}

export default useFetchApi