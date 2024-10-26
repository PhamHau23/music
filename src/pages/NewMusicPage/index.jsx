import classNames from "classnames/bind"
import styles from "./NewMusicPage.module.scss"
import { playIcon1 } from "src/icon"

const img = 'https://res.cloudinary.com/dtzqisgc8/image/upload/v1729928981/webMusic/t%E1%BA%A3i_xu%E1%BB%91ng_2_mauvvs.jpg'

export default function NewMusicPage(){

    const c = classNames.bind(styles)

    return (
        <div className={c('newMusicPage')}>
            <div className={c('newMusicPage-title')}>
                <div className="flex al-center">
                    <h1>BXH Nhạc Mới</h1>
                    <span className={c('NewMusicPage-icon')}>{playIcon1}</span>
                </div>
            </div>
            <div className={c('songList')}>
                <div className={c('songItem')}>
                    <div className="flex padding-all-10 al-center">
                        <span className={c('topNumber')}>1</span>
                        <div className={c('songInfo', 'flex flex-2')}>
                            <img src={img} alt=""/>

                            <div>
                                <p className={c('songName')}>name</p>
                                <p className={c('songSinger')}>sub-info</p>
                            </div>
                        </div>
                        <div className={c('songDesc', 'flex flex-2')}>
                            <p>desc</p>
                        </div>
                        <div className={c('songTime')}>
                            <p>time</p>
                        </div>
                    </div>
                    <span className="line" style={{margin: '0 5px'}}></span>
                </div>
                <div className={c('songItem')}>
                    <div className="flex padding-all-10 al-center">
                        <span className={c('topNumber')}>1</span>
                        <div className={c('songInfo', 'flex flex-2')}>
                            <img src={img} alt=""/>

                            <div>
                                <p className={c('songName')}>name</p>
                                <p className={c('songSinger')}>sub-info</p>
                            </div>
                        </div>
                        <div className={c('songDesc', 'flex flex-2')}>
                            <p>desc</p>
                        </div>
                        <div className={c('songTime')}>
                            <p>time</p>
                        </div>
                    </div>
                    <span className="line" style={{margin: '0 5px'}}></span>
                </div>
                <div className={c('songItem')}>
                    <div className="flex padding-all-10 al-center">
                        <span className={c('topNumber')}>1</span>
                        <div className={c('songInfo', 'flex flex-2')}>
                            <img src={img} alt=""/>

                            <div>
                                <p className={c('songName')}>name</p>
                                <p className={c('songSinger')}>sub-info</p>
                            </div>
                        </div>
                        <div className={c('songDesc', 'flex flex-2')}>
                            <p>desc</p>
                        </div>
                        <div className={c('songTime')}>
                            <p>time</p>
                        </div>
                    </div>
                    <span className="line" style={{margin: '0 5px'}}></span>
                </div>
                <div className={c('songItem')}>
                    <div className="flex padding-all-10 al-center">
                        <span className={c('topNumber')}>1</span>
                        <div className={c('songInfo', 'flex flex-2')}>
                            <img src={img} alt=""/>

                            <div>
                                <p className={c('songName')}>name</p>
                                <p className={c('songSinger')}>sub-info</p>
                            </div>
                        </div>
                        <div className={c('songDesc', 'flex flex-2')}>
                            <p>desc</p>
                        </div>
                        <div className={c('songTime')}>
                            <p>time</p>
                        </div>
                    </div>
                    <span className="line" style={{margin: '0 5px'}}></span>
                </div>
            </div>
        </div>
    )
}