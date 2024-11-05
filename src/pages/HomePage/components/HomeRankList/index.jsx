import React from "react"
import classNames from "classnames/bind"
import styles from "./HomeRankList.module.scss"
import CarouselContainer from "~components/CarouselContainer"
import HoverSongAni from "src/components/HoverSongAni"
import HomeRankItem from "./Components/HomeRankListItem"

const img = 'https://i.pinimg.com/564x/d7/79/50/d7795026c03f26b13cd751cfb062691b.jpg'

const day = new Date

const upLoadDate = `${day.getUTCDate()}/${day.getUTCMonth() + 1}/${day.getUTCFullYear()}`

const c = classNames.bind(styles)

const arr = [
    {
        img,
        songName: 'hope is the thing with feather',
        singerName: 'robin',
        top: 1,
        upLoadDate
    },

    {
        img,
        songName: 'hope is the thing with feather',
        singerName: 'robin',
        top: 2,
        upLoadDate
    },

    {
        img,
        songName: 'hope is the thing with feather',
        singerName: 'robin',
        top: 3,
        upLoadDate
    },

    {
        img,
        songName: 'hope is the thing with feather',
        singerName: 'robin',
        top: 4,
        upLoadDate
    }
]


function HomeRankList(){
    return(
        <div className={c('HomeRankList','col-gap-18')}>
            <h1>BXH Nhạc Mới</h1>
            <CarouselContainer title='BXH Nhạc Mới' data={arr}>
                {
                    arr.map((item, index) => (
                        <div className={c('homeRankList-item')} key={index}>
                            <a href="/">
                                <div className={c('img')}>
                                    <img src={item.img} />
                                    <HoverSongAni />
                                </div>

                                <div className={c('info', 'w-100')}>
                                    <div className={c('top', 'w-100')}>
                                        <p className="t-line1" style={{width: '100%'}}>{item.songName}</p>
                                        <p className="t-line2" style={{width: '100%'}}>{item.singerName}</p>
                                    </div>

                                    <div className={c('bot')}>
                                        <span>#{item.top}</span>
                                        <p>{item.upLoadDate}</p>
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