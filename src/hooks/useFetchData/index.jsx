import { useEffect, useState } from "react"

function useFetchData(url){
    const [data, setData] = useState()
    console.log('fetch', data)

    useEffect(() => {
        if(url){
            setData(url)
        }
    },[url])

    return data
}

export default useFetchData