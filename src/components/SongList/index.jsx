import { useContext, useEffect } from "react"
import SongItem from "./components/SongItem"
import { GetApiDataContext } from "~/contexts"
import { useDispatch } from "react-redux"
import { setPlayList } from "~/redux/slices/musicPlayerSlice"


function SongList({icon}){
    const {value} = useContext(GetApiDataContext)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPlayList(value))
    }, [])

    return (
        <div className="relative flex-2">
            <SongItem icon={icon}/>
        </div>
    )
}

export default SongList