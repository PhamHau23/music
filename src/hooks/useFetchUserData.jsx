import { useEffect, useState } from "react"

const api = import.meta.env.VITE_API_URL

function useFetchUserData(token) {
    const [data, setData] = useState(null)

    useEffect(() => {
      if(!token) return
      
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
    
        const userInfo = await response.json()
        localStorage.setItem('_id',userInfo._id)
        localStorage.setItem('role',userInfo.role)
        setData(userInfo)
      })()
    }, [token])

    return data
}

export default useFetchUserData