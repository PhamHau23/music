import { useDispatch, useSelector } from "react-redux"
import { playIcon1 } from "~/icon"
import { fetchSongApi } from "~/redux/slices/musicPlayerSlice"
import Button from "~components/Button"


export const RandomPlay = () => {
    const dispatch = useDispatch()
    const {playList} = useSelector(state => state.musicPlayer)
    const handlePlayRandomSong = () => {
        const randomIndex = Math.floor(Math.random() * playList.length)
        dispatch(fetchSongApi(playList[randomIndex]._id))
    }

    return(
        <Button onClick={handlePlayRandomSong}>
            <i>{playIcon1}</i> RANDOM PLAYING
        </Button>
    )
}