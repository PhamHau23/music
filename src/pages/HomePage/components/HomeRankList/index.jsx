import React, { useEffect, useState } from "react"
import classNames from "classnames/bind"
import styles from './HomeRankList.module.scss'
import CarouselContainer from "src/components/CarouselContainer"
import HoverSongAni from "src/components/HoverSongAni"
import { capitalizeWords } from "~/lib/capitalizeWords"
import { formatDate } from "~/lib/formatDate"
import { useDispatch } from "react-redux"
import { fetchSongApi, setPlayList } from "~/redux/slices/musicPlayerSlice"

const c = classNames.bind(styles)

function HomeRankList({data}){
    const [song, setSongs] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        if(data && data.rankAllSong){
            setSongs(data.rankAllSong)
        }
    }, [])

    const playSongSelected = (id) => {
        dispatch(fetchSongApi(id))
        dispatch(setPlayList(data.rankAllSong))
    }

    return(
        <div className={c('HomeRankList','col-gap-18')}>
            <h1>BXH Nhạc Mới</h1>
            <CarouselContainer title='BXH Nhạc Mới' data={song} widthItem={33.8} num={3}>
                {
                    song.map((item, index) => (
                        <div className={c('homeRankList-item')} key={item._id} onClick={() => playSongSelected(item._id)}>
                            <a className={c('wrap')}>
                                <div className={c('img')}>
                                    <img src={item.img} />
                                    <HoverSongAni />
                                </div>

                                <div className={c('info', 'w-100')}>
                                    <div className={c('top', 'w-100')}>
                                        <p className="t-line1" style={{width: '100%'}}>
                                            {capitalizeWords(item.name)}
                                        </p>
                                        <div className="flex w-100">
                                            {item.singerName.map((name, index2) => (
                                                <a className="t-line2" style={{width: 'auto'}} key={index2}>
                                                    {capitalizeWords(name)}
                                                    {index2 < item.singerName.length - 1 && ', '}
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