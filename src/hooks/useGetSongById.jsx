import axios from "axios";

const api = import.meta.env.VITE_API_URL

export const useGetSongById = async (id) => {
    try {
      const song = axios.get(`${api}song/${id}`)
      return song
    } catch (error) {
      console.error(error);
      throw error;
    }
};