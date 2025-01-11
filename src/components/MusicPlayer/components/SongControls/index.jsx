import classNames from "classnames/bind"
import { useEffect, useMemo, useRef, useState, useCallback } from "react"
import { throttle } from "lodash"
import styles from "../../MusicPlayer.module.scss"
import { FaRandom as RandomSongIcon } from "react-icons/fa"
import { FaBackwardStep as BackSongIcon, FaPlay as PlaySongIcon, FaPause as PauseSongIcon, FaForwardStep as NextSongIcon } from "react-icons/fa6"
import { RxLoop as LoopSongIcon } from "react-icons/rx"
import { useDispatch, useSelector } from "react-redux"
import { fetchSongApi } from "~/redux/slices/musicPlayerSlice"
import { VolumeControl } from "./components/VolumeControl"
import { convertSeconds } from "~/lib/convertSeconds"

export const SongControls = () => {

    const c = classNames.bind(styles)
    const dispatch = useDispatch()
    const audioRef = useRef()
    const currentTimeRef = useRef()
    const progressBarRef = useRef()
    const {currentSong, playList} = useSelector(state => state.musicPlayer)
    const [playSong, setPlaySong] = useState(true)
    const [randomSong, setRandomSong] = useState(false)
    const [loopSong, setLoopSong] = useState(false)


    //xử lý play và pause
    const togglePlayPause = () => {
        if(audioRef.current.paused && playSong === true ){
            setPlaySong(false)
            audioRef.current.play()
        }else{
            setPlaySong(true)
            audioRef.current.pause()
        }
    }

    //set lại nút khi chọn chuyển bài hát
    const handlePlay = () => {
        setPlaySong(false)
    }

    //xử lý khi end
    const handleEnded = () => {
        if(randomSong == true && loopSong == false){
            const randomIndex = Math.floor(Math.random() * playList.length)
            const nextSong = playList[randomIndex]
            dispatch(fetchSongApi(nextSong._id))
        }else{
            const currSongIndex = playList.findIndex(song => currentSong._id === song._id)
            const nextSong = playList[(currSongIndex + 1) % playList.length]
            dispatch(fetchSongApi(nextSong._id))
        }
    }

    //xử lý current time
    const handleCurrentTime = useCallback(
        throttle((e) => {
            const currentTime = Math.floor(e.target.currentTime)
            const progressBar = (e.target.currentTime / currentSong.duration) * 100
            currentTimeRef.current.innerText = convertSeconds(currentTime)
            progressBarRef.current.value = progressBar
        }, 1000),[currentSong]
    )
    
    //play rondom song
    const handleClickRandomSong = () => {
        setRandomSong(!randomSong)
        if(loopSong == true){
            setLoopSong(false)
        }
    }

    //play loop song
    const handleClickLoopSong = () => {
        setLoopSong(!loopSong)
        audioRef.current.loop = !loopSong
        if(randomSong == true){
            setRandomSong(false)
        }
    }

    //back song
    const handleClickBackSong = () => {
        const currSongIndex = playList.findIndex(song => currentSong._id === song._id)
        const prevSong = playList[(currSongIndex - 1 + playList.length) % playList.length]
        dispatch(fetchSongApi(prevSong._id))
    }

    //next song
    const handleClickNextSong = () => {
        const currSongIndex = playList.findIndex(song => currentSong._id === song._id)
        const nextSong = playList[(currSongIndex + 1) % playList.length]
        dispatch(fetchSongApi(nextSong._id))
    }

    return(
        <div className={c('coltrols')}>
            <div className={c('buttonList')}>
                <div onClick={handleClickRandomSong} style={randomSong ? {color: '#8E46CD'} : {color: 'white'}}> 
                    <RandomSongIcon /> 
                </div>
                <div onClick={handleClickLoopSong} style={loopSong ? {color: '#8E46CD'} : {color: 'white'}}> 
                    <LoopSongIcon /> 
                </div>
                <div onClick={handleClickBackSong}> <BackSongIcon /> </div>
                <div className={c('playIcon')} onClick={togglePlayPause}> 
                    {playSong ? <PlaySongIcon /> : <PauseSongIcon />}
                </div>
                <div onClick={handleClickNextSong}> <NextSongIcon /> </div>
                <VolumeControl 
                    audioRef={audioRef}
                    currentSong={currentSong}
                />
            </div>

            <div className={c('songTime')}>
                <span ref={currentTimeRef} className={c('currentTime', 'timeMusic')}>00:00</span>
                <div className={c('progressBar')}>
                    <progress 
                        ref={progressBarRef}
                        value='0'
                        max='100'
                        className={c('audioInput')}
                        />
                </div>
                <audio ref={audioRef} 
                        className={c('audio')} 
                        src={currentSong && currentSong.url} 
                        onEnded={handleEnded} 
                        autoPlay 
                        onPlay={handlePlay}
                        onTimeUpdate={handleCurrentTime}
                ></audio>
                <span className={c('totalTime', 'timeMusic')}>{currentSong ? convertSeconds(currentSong.duration) : '00:00'}</span>
            </div>
        </div>
    )
}