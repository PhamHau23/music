import { useEffect, useState } from "react"

function useFetchData(url){
    const [data, setData] = useState(url)

    useEffect(() => {
        setData(url)
    },[url])

    return data
}

export default useFetchData