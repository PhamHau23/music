import classNames from "classnames/bind"
import styles from "./MusicPlayer.module.scss"
import { BackSongIcon, LoopSongIcon, NextSongIcon, PauseSongIcon, PlaySongIcon, RandomSongIcon } from "src/icon"
import { useState } from "react"

const img = 'https://i.pinimg.com/736x/7e/d9/6f/7ed96f01d7808373b49614ca6b7afa53.jpg'

function MusicPlayer(){

    const c = classNames.bind(styles)
    const [playSong, setPlaySong] = useState(true)
    const [randomSong, setRandomSong] = useState(false)
    const [loopSong, setLoopSong] = useState(false)

    const handleClickPlaySong = () => {
        setPlaySong(!playSong)
    }

    const handleClickRandomSong = () => {
        setRandomSong(!randomSong)
    }

    const handleClickLoopSong = () => {
        setLoopSong(!loopSong)
    }

    return(
        <div className={c('musicPlayer')}>
            <div className={c('info')}>
                <div className={c('img')}>
                    <img src={img} alt="" />
                </div>
                <div className={c('name', 'w-100')}>
                    <div className={c('songName','w-100')}>
                        <p className="t-line1">name1</p>
                    </div>
                    <div className={c('singerName','w-100')}>
                        <p className="t-line2">name1</p>
                    </div>
                </div>
            </div>

            <div className={c('coltrols')}>
                <div className={c('buttonList')}>
                    <div onClick={handleClickRandomSong} style={randomSong ? {color: '#8E46CD'} : {color: 'white'}}> 
                        <RandomSongIcon /> 
                    </div>
                    <div> <BackSongIcon /> </div>
                    <div className={c('playIcon')} onClick={handleClickPlaySong}> 
                        {playSong ? <PlaySongIcon /> : <PauseSongIcon />}
                    </div>
                    <div> <NextSongIcon /> </div>
                    <div onClick={handleClickLoopSong} style={loopSong ? {color: '#8E46CD'} : {color: 'white'}}> <LoopSongIcon /> </div>
                </div>

                <div className={c('songTime')}>
                    <span className={c('currentTime', 'timeMusic')}>00:00</span>
                    <input type="range" min='0' max='100' value='0' className={c('audioInput')}/>
                    <audio className={c('audio')}></audio>
                    <span className={c('totalTime', 'timeMusic')}>02:00</span>
                </div>
            </div>

            <div className={c('options')}>

            </div>
        </div>
    )
}

export default MusicPlayer