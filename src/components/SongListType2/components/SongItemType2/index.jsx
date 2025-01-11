import { useContext } from "react"
import classNames from "classnames/bind"
import styles from "./SongItemType2.module.scss"
import { dau3Cham } from "src/icon"
import HoverSongAni from "src/components/HoverSongAni"
import { SongDataContext } from "src/contexts"
import { useDispatch } from "react-redux"
import { fetchSongApi, setPlayList } from "~/redux/slices/musicPlayerSlice"
import { capitalizeWords } from "~/lib/capitalizeWords"
import { formatDate } from "~/lib/formatDate"
import { convertSeconds } from "~/lib/convertSeconds"

function SongItemType2(){
    const c = classNames.bind(styles)
    const dispatch = useDispatch()
    const {value} = useContext(SongDataContext)

    const handleClick = (id) => {
        dispatch(fetchSongApi(id))
        dispatch(setPlayList(value))
    }

   
    return(
        <div className={c('songItemType2-wrap')}>
            {value.map((item) => (
                <div className={c('song')} key={item._id} onClick={() => handleClick(item._id)}>
                    <div className={c('song-img')}>
                        <img src={item.img} alt="" />
                        <HoverSongAni />
                    </div>

                    <div className={c('song-info')}>
                        <p className={c('songName')}>{capitalizeWords(item.name)}</p>
                        <div className={c('singerName')}>
                            {item.singerName.map((singer, index) => (
                                <a href="/" key={index} >
                                    {capitalizeWords(singer)} 
                                    {index < item.singerName.length - 1 && ', '}
                                </a>
                            ))}
                        </div>
                        {item.createdAt && <p className={c('timeUpadated')}>{formatDate(item.updatedAt)}</p>}
                    </div>

                    {item.duration && <span className={c('songTime')}>{convertSeconds(item.duration)}</span>}
                    <div className={c('other-opt')}>
                        {dau3Cham}
                    </div>
                </div>
            ))}        
        </div>
    )
}

export default SongItemType2