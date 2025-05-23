import { useContext, useState, useEffect } from "react"
import classNames from "classnames/bind"
import styles from "./SongItemType2.module.scss"
import { dau3Cham } from "~/icon"
import HoverSongAni from "~/components/HoverSongAni"
import { SongDataContext } from "~/contexts"
import { useDispatch } from "react-redux"
import { setCurrentSong, setPlayList } from "~/redux/slices/musicPlayerSlice"
import { capitalizeWords } from "~/lib/capitalizeWords"
import { formatDate } from "~/lib/formatDate"
import { convertSeconds } from "~/lib/convertSeconds"
import { useNavigate } from "react-router-dom"
import { useGetSongById } from "~/hooks/useGetSongById"
import { useQuery } from "@tanstack/react-query"

function SongItemType2({className}){
    const [songId, setSongId] = useState(null)
    const c = classNames.bind(styles)
    const dispatch = useDispatch()
    const {value} = useContext(SongDataContext)
    const navigate = useNavigate()
    
    const {data: song} = useQuery({
        queryKey: ['songId', songId],
        queryFn: () => useGetSongById(songId),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 10,
        enabled: !!songId
    })

    const handleClick = (id) => {
        setSongId(id)
        dispatch(setPlayList(value))
    }

    const handleClickSingerPage = (slug) => {
        navigate(`/singer/${slug}`)
    }

    useEffect(() => {
        if(song && song.data){
            dispatch(setCurrentSong(song.data))
        }
    }, [dispatch, song])
   
    return(
        <div className={c('songItemType2-wrap', className)}>
            {value.map((item) => (
                <div className={c('song')} key={item._id} onClick={() => handleClick(item._id)}>
                    <div className={c('song-img')}>
                        <img src={item.img} alt="" loading="lazy"/>
                        <HoverSongAni />
                    </div>

                    <div className={c('song-info')}>
                        <p 
                            className={c('songName')}
                        >{capitalizeWords(item.name)}</p>
                        <div className={c('singerName')}>
                            {item.singerId.map((singer, index) => (
                                <a
                                className={c('singerName1')}
                                onClick={() => handleClickSingerPage(singer.slug)}
                                key={index} >
                                    {capitalizeWords(singer.name)} 
                                    {index < item.singerId.length - 1 && ', '}
                                </a>
                            ))}
                        </div>
                        {item.createdAt && <p className={c('timeUpdated')}>{formatDate(item.updatedAt)}</p>}
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