import useFetchApi from "~/hooks/useFetchApi"
import MusicPlayer from "~components/MusicPlayer"


export const PlaySongSelected = ({id}) => {
    const songSelected = useFetchApi(`song/${id}`)
    
    return(
        <MusicPlayer data={songSelected}/>
    )
}