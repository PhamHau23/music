import classNames from "classnames/bind"
import styles from "../SingerPage.module.scss"
import { capitalizeWords } from "~/lib/capitalizeWords"
import { formatDate } from "~/lib/formatDate"
import { useDispatch } from "react-redux"
import { fetchSongApi } from "~/redux/slices/musicPlayerSlice"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const c = classNames.bind(styles)

const NewSong = ({data}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [songId, setSongId] = useState(null)

    const handleClick = (id) => {
        setSongId(id)
    }

    const handleClickSingerPage = (slug) => {
        navigate(`/singer/${slug}`)
    } 

    useEffect(() => {
        if(songId){
            dispatch(fetchSongApi(songId))
        }
    }, [dispatch, songId])


    return(
        <div className={c('newSong','tabletNewSong')}>
            <h1>New Song</h1>
            {data &&  
            <div className={c('song')} onClick={() => handleClick(data._id)}>
                <img src={data.img} alt="" className={c('tabletNewSongImg')}/>
                <div className={c('info')}>
                    <h1>{capitalizeWords(data.name)}</h1>
                    <p>
                        {data.singerId.map((singer, i) => (
                            <a className={c('singerName')} key={i} onClick={() => handleClickSingerPage(singer.slug)}>
                                {capitalizeWords(singer.name)}
                                {i < data.singerId.length - 1 && ', '}
                            </a>
                        ))}
                    </p>
                    <span className={c('date')}>
                        {formatDate(data.releaseDate)}
                    </span>
                </div>
            </div>}
        </div>
    )
}

export default NewSong