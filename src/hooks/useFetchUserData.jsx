import { useEffect, useState } from "react"

const api = import.meta.env.VITE_API_URL

function useFetchUserData(token) {
    const [data, setData] = useState(null)
    useEffect(() => {
      (async() => {
        const response = await fetch(`${api}user/profile`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        })
    
        if (!response.ok) {
          throw new Error("Failed to fetch user info");
        }
    
        const userInfo = await response.json();
        setData(userInfo)
      })()
    }, [token])
    return data
}

export default useFetchUserData