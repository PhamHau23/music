import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { api } from "../AdminLayout"

const useFetchAdminApi = (endpoint) => {
    const {data: apiData, isLoading} = useQuery({
        queryKey: ['apiData', endpoint],
        queryFn: () => axios.get(`${api}${endpoint}`),
        staleTime: 1000 * 60 * 2,
        gcTime: 1000 * 60 * 5
    })

    return {apiData, isLoading}
}

export default useFetchAdminApi