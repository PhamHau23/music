import { configureStore } from "@reduxjs/toolkit"
import musicPlayerReducer from "./slices/musicPlayerSlice"
import songsDataReducer from "./slices/songsData"
import userReducer from "./slices/userSlice"
import userDataReducer from "./slices/userDataSlice"

const store = configureStore({
    reducer: {
        musicPlayer: musicPlayerReducer,
        songsData: songsDataReducer,
        user: userReducer,
        userData: userDataReducer
    }
})

export default store