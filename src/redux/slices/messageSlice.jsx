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
            state.message.push(action.payload)
        }
    }
})

export const { setMessage, resetData } = messageSlice.actions

export default messageSlice.reducer