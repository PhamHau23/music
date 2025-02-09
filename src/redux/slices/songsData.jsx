import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import useFetchApi from "~/hooks/useFetchApi"

const songsDataSlice = createSlice({
    name: 'songsData',
    initialState: {
        songsList: [],
        loading: true,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllSongApi.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchAllSongApi.fulfilled, (state, action) => {
                state.songsList = action.payload
                state.loading = false
            })
            .addCase(fetchAllSongApi.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})


export const fetchAllSongApi = createAsyncThunk(
    'songsData/fetchAllSongApi',
    (params) => {
        const data = useFetchApi(params)
        return data
    }
)

export default songsDataSlice.reducer