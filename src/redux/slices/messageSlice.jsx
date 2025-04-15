import { createSlice } from "@reduxjs/toolkit"

const messageSlice = createSlice({
  name: "message",
    initialState: {
        message: [
            {
                text: null,
                from: null
            }
        ]
    },
    reducers: {
        setMessage(state, action) {
            console.log("action", action.payload)
            state.message.push(action.payload)
        }
    }
})

export const { setMessage } = messageSlice.actions

export default messageSlice.reducer