import axios from "axios"
import { useEffect, useState } from "react"

const api = import.meta.env.VITE_API_URL

const useFetchUserData = async (token) => {
  const response = await axios.get(`${api}user/profile`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })

  const userInfo = await response.data
  
  await Promise.all([
    localStorage.setItem('_id',userInfo._id),
    localStorage.setItem('role',userInfo.role)
  ])
  
  return userInfo
}

export default useFetchUserData