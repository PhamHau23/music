import React, { useEffect, useState } from "react"
import classNames from "classnames/bind"
import styles from './HomeRankList.module.scss'
import CarouselContainer from "src/components/CarouselContainer"
import HoverSongAni from "src/components/HoverSongAni"
import { capitalizeWords } from "~/lib/capitalizeWords"
import { formatDate } from "~/lib/formatDate"
import { useDispatch } from "react-redux"
import { fetchSongApi, setPlayList } from "~/redux/slices/musicPlayerSlice"
import { useNavigate } from "react-router-dom"

const c = classNames.bind(styles)

function HomeRankList({data}){
    const [song, setSongs] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(data && data.rankAllSong){
            setSongs(data.rankAllSong)
        }
    }, [])

    const playSongSelected = (id) => {
        dispatch(fetchSongApi(id))
        dispatch(setPlayList(data.rankAllSong))
    }

    const handleClickSingerPage = (slug) => {
        navigate(`/singer/${slug}`)
    }

    return(
        <div className={c('HomeRankList','col-gap-18')}>
            <h1>BXH Bài Hát Mới</h1>
            <CarouselContainer title='BXH Bài Hát Mới' data={song} widthItem={33.8} num={3}>
                {
                    song.map((item, index) => (
                        <div className={c('homeRankList-item')} key={item._id}>
                            <a className={c('wrap')}>
                                <div className={c('img')} onClick={() => playSongSelected(item._id)}>
                                    <img src={item.img} />
                                    <HoverSongAni />
                                </div>

                                <div className={c('info', 'w-100')}>
                                    <div className={c('top', 'w-100')}>
                                        <p className="t-line1" style={{width: '100%'}}>
                                            {capitalizeWords(item.name)}
                                        </p>
                                        <div className="flex w-100">
                                            {item.singerId.map((singer, index2) => (
                                                <a 
                                                    className="t-line2" 
                                                    style={{width: 'auto'}} 
                                                    key={index2}
                                                    onClick={() => handleClickSingerPage(singer.slug)}
                                                >
                                                    {capitalizeWords(singer.name)}
                                                    {index2 < item.singerId.length - 1 && ', '}
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    <div className={c('bot')}>
                                        <span>#{index + 1}</span>
                                        <p>{formatDate(item.updatedAt)}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))
                }        
            </CarouselContainer>
        </div>
    )
}

export default HomeRankList