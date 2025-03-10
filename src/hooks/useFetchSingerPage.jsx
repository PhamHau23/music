import { useQuery } from "@tanstack/react-query"
import axios from "axios"
const api = import.meta.env.VITE_API_URL

function useFetchSingerPage(endpoint){    
    const {data: apiData} = useQuery({
        queryKey: ['apiData', endpoint],
        queryFn: () => axios.get(`${api}/${endpoint}`),
        staleTime: 1000 * 60 * 2,
        gcTime: 1000 * 60 * 4,
        enabled: !!endpoint, 
    })

    return apiData
}

export default useFetchSingerPage