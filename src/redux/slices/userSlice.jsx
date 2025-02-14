import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from "~/admin/AdminLayout"

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLogin: localStorage.getItem('authToken') ? true : false,
        error: false,
        loading: false,
        message: null,
        errorMessage: null
    },
    reducers: {
      logOut(state){
        state.isLogin = false
        localStorage.removeItem('authToken')
        localStorage.removeItem('_id')
        localStorage.removeItem('role')
      }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true,
                state.error = false,
                state.errorMessage = null
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLogin = true
                state.error = false
                state.errorMessage = null
                state.loading = false
                localStorage.setItem('authToken', action.payload)
            })
            .addCase(login.rejected, (state, action) => {
                state.error = true
                state.loading = false
                state.errorMessage = action.payload
            })
            .addCase(registerAccount.pending, (state) => {
                state.loading = true
                state.error = false
                state.errorMessage = null
            })
            .addCase(registerAccount.fulfilled, (state, action) =>{
                state.message = action.payload
                state.loading = false
                state.error = false
                state.errorMessage = null
            })
            .addCase(registerAccount.rejected, (state, action) => {
                state.error = true
                state.loading = false
                state.errorMessage = action.payload
            })
    }
})

export const login = createAsyncThunk(
    'user/login',
    async (formData,{rejectWithValue}) => {
          try {
            const response = await fetch(`${api}user/login`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok) {
              return data.token
            } else {
              return rejectWithValue(data.message)
            }
          } catch (error) {
            return rejectWithValue(error.message)
          }
    }
)

export const registerAccount = createAsyncThunk(
  'user/register',
  async (formData,{rejectWithValue}) => {
      try {
          const response = await fetch(`${api}user/register`, {
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