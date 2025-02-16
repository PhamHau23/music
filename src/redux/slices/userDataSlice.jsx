import { createSlice } from "@reduxjs/toolkit"


const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
        img: null
    },
    reducers: {
        setImgUser(state, action){
            state.img = action.payload
        }
    }
})

export const {setImgUser} = userDataSlice.actions

export default userDataSlice.reducer