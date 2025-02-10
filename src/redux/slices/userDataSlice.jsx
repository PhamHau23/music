import { createSlice } from "@reduxjs/toolkit"


const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
        img: null,
        role: null
    },
    reducers: {
        setImgUser(state, action){
            state.img = action.payload
        },
        setRole(state, action) {
            state.role = action.payload
        }
    }
})

export const {setImgUser, setRole} = userDataSlice.actions

export default userDataSlice.reducer