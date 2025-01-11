import { configureStore } from "@reduxjs/toolkit"
import musicPlayerReducer from "./slices/musicPlayerSlice"
import songsDataReducer from "./slices/songsData"

const store = configureStore({
    reducer: {
        musicPlayer: musicPlayerReducer,
        songsData: songsDataReducer
    }
})

export default store