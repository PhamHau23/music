import classNames from "classnames/bind"
import styles from "./SongItemType2.module.scss"
import { dau3Cham } from "src/icon"
import HoverSongAni from "src/components/HoverSongAni"
import { SongDataContext } from "src/contexts"
import { useContext } from "react"

function SongItemType2(){

    const c = classNames.bind(styles)
    const {value} = useContext(SongDataContext)
    
    return(
        <div className={c('songItemType2-wrap')}>
            {value.map((item, index) => (
                <div className={c('song')} key={index}>
                    <div className={c('song-img')}>
                        <img src={item.songImg} alt="" />
                        <HoverSongAni />
                    </div>

                    <div className={c('song-info')}>
                        <p className={c('songName')}>{item.songName}</p>
                        <div className={c('singerName')}>
                            {item.songSinger.map((singer, index) => (
                                <a href="/" key={index} >{singer}</a>
                            ))}
                        </div>
                        {item.timeUpadated && <p className={c('timeUpadated')}>11/04/2023</p>}
                    </div>

                    {item.songTime && <span className={c('songTime')}>{item.songTime}</span>}
                    <div className={c('other-opt')}>
                        {dau3Cham}
                    </div>
                </div>
            ))}        
        </div>
    )
}

export default SongItemType2