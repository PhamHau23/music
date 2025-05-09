import { useQuery } from "@tanstack/react-query"
import axios from "axios"
const api = import.meta.env.VITE_API_URL

function useFetchApi(endpoint){    
    const {data: apiData} = useQuery({
        queryKey: ['apiData', endpoint],
        queryFn: () => axios.get(`${api}/${endpoint}`),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
        enabled: !!endpoint, 
    })

    return apiData
}

export default useFetchApi