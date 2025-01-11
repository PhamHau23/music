import classNames from "classnames/bind"
import styles from "./SongItem.module.scss"
import { useDispatch } from "react-redux"
import HoverSongAni from "src/components/HoverSongAni"
import { useContext, useEffect, useState } from "react"
import SongTopNumber from "../SongTopNumber"
import SongIconMusic from "../SongIconMusic"
import { GetApiDataContext } from "~/contexts"
import { fetchSongApi } from "~/redux/slices/musicPlayerSlice"
import { capitalizeWords } from "~/lib/capitalizeWords"
import { convertSeconds } from "~/lib/convertSeconds"


function SongItem({icon}){
    const [songId, setSongId] = useState(null)
    const c = classNames.bind(styles)
    const {value} = useContext(GetApiDataContext)
    const dispatch = useDispatch()

    const handleClick = (id) => {
        setSongId(id)
    }

    useEffect(() => {
        if(songId){
            dispatch(fetchSongApi(songId))
        }
    }, [songId, dispatch])

    return(
        value.map((item, index) => (
            <div className={c('songItem')} key={item._id} onClick={() => handleClick(item._id)}>
                <div className="flex padding-all-10 al-center">
                    <div className={c('songInfo', 'flex flex-2')}>
                        {icon ? <SongIconMusic icon={icon} className={c('songIconMusic')} />
                            : <SongTopNumber number={index + 1}/>}
                        <div className={c('songItemImg', 'relative')}>
                            <img src={item.img} alt=""/>
                            <HoverSongAni />
                        </div>
                        <div className="w-100">
                            <p className={c('songName','t-line1')} style={{width: '95%'}}>{item.name}</p>
                            {item.singerName.map((name, index) => (
                                <a className={c('songSinger', 't-line1')} key={index} style={{width: '95%'}}>
                                    {capitalizeWords(name)}
                                    {index < item.singerName.length - 1 && ', '}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className={c('songDesc', 'flex flex-2', 'w-100')}>
                        {item.album && <a href={`/album/${item.album._id}`} className="t-line1" style={{width: '90%'}}>{capitalizeWords(item.album.name)}</a>}
                        {item.genre && <a href={`/songs/${item.genre._id}`} className="t-line1" style={{width: '90%'}}>{capitalizeWords(item.genre.name)}</a>}
                    </div>
                    <div className={c('songTime')}>
                        <p>{item.duration && convertSeconds(item.duration)}</p>
                    </div>
                </div>
                <span className="line" style={{margin: '0 5px'}}></span>
            </div>
        ))
    )
}

export default SongItem