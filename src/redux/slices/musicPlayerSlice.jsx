import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchSongById } from "~/hooks/useGetSong"

const musicPlayerSlice = createSlice({
    name: "musicPlayer",
    initialState: {
      currentSong: null,
      playList:[],
      loading: true,
      error: null
    },
    reducers: {
      setPlayList(state, action){
        state.playList = action.payload
      },
      setPlayRandomSong(state, action) {
        const currentSong = state.playList[action.payload]
        fetchSongApi(currentSong._id)
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchSongApi.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchSongApi.fulfilled, (state, action) => {
          state.currentSong = action.payload;
          state.loading = false;
        })
        .addCase(fetchSongApi.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
    }
  });

//redux thunk

export const fetchSongApi = createAsyncThunk(
    'musicPlayer/fetchSongApi',
    async(id) => {
        const song = fetchSongById(id)
        return song
    }
)


export const {setNextSong, setPlayList, setPrevSong, setPlayRandomSong} = musicPlayerSlice.actions

export default musicPlayerSlice.reducer