import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLogin: localStorage.getItem('authToken') ? true : false,
        error: null,
        loading: false,
        message: null
    },
    reducers: {
      logOut(state){
        state.isLogin = false
        localStorage.removeItem('authToken')
      }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true,
                state.err = null
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLogin = true
                state.err = null
                state.loading = false
                localStorage.setItem('authToken', action.payload)
            })
            .addCase(login.rejected, (state, action) => {
                state.error = action.payload
            })
            .addCase(registerAccount.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(registerAccount.fulfilled, (state, action) =>{
                state.message = action.payload
                state.loading = false
                state.error = null
                console.log(action.payload)
            })
            .addCase(registerAccount.rejected, (state, action) => {
                state.error = action.payload
            })
    }
})

export const login = createAsyncThunk(
    'user/login',
    async (formData,{rejectWithValue}) => {
        try {
          console.log(formData)
            const response = await fetch("http://localhost:3000/api/user/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData),
            })
            const data = await response.json()
            if (response.ok) {
              return data.token
            } else {
              return rejectWithValue(data.error)
            }
          } catch (error) {
            return rejectWithValue(error)
          }
    }
)

export const registerAccount = createAsyncThunk(
  'user/register',
  async (formData,{rejectWithValue}) => {
      try {
        console.log(formData)
          const response = await fetch("http://localhost:3000/api/user/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          })
          const data = await response.json()
          if (response.ok) {
            return data.message
          } else {
            return rejectWithValue(data.error)
          }
        } catch (error) {
          return rejectWithValue(error)
        }
  }
)

export const {logOut} = userSlice.actions


export default userSlice.reducer