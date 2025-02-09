const api = import.meta.env.VITE_API_URL

export const fetchSongById = async (id) => {
    try {
      const response = await fetch(`${api}song/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch song");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
};