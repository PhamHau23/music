import classNames from "classnames/bind"
import { useRef, useState, useCallback, useEffect } from "react"
import { throttle } from "lodash"
import styles from "../../MusicPlayer.module.scss"
import { FaRandom as RandomSongIcon } from "react-icons/fa"
import { FaBackwardStep as BackSongIcon, FaPlay as PlaySongIcon, FaPause as PauseSongIcon, FaForwardStep as NextSongIcon } from "react-icons/fa6"
import { RxLoop as LoopSongIcon } from "react-icons/rx"
import { useDispatch, useSelector } from "react-redux"
import { fetchSongApi, setCurrentSong } from "~/redux/slices/musicPlayerSlice"
import { VolumeControl } from "./components/VolumeControl"
import { convertSeconds } from "~/lib/convertSeconds"
import { useQuery } from "@tanstack/react-query"
import { useGetSongById } from "~/hooks/useGetSongById"

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
    const [songId, setSongId] = useState(null)

    //use query
    const {data: song} = useQuery({
        queryKey: ['song', songId],
        queryFn: () => useGetSongById(songId),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 10,
        enabled: !!songId
    })

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

    //set lại nút khi đổi bài hát
    const handlePlay = () => {
        setPlaySong(false)
    }

    //xử lý khi end
    const handleEnded = () => {
        if(randomSong == true && loopSong == false){
            const randomIndex = Math.floor(Math.random() * playList.length)
            const nextSong = playList[randomIndex]
            setSongId(nextSong._id)
        }else{
            const currSongIndex = playList.findIndex(song => currentSong._id === song._id)
            const nextSong = playList[(currSongIndex + 1) % playList.length]
            setSongId(nextSong._id)
        }
    }

    //xử lý current time
    const handleCurrentTime = useCallback(
        throttle((e) => {
            const currentTime = Math.floor(e.target.currentTime)
            const progressBar = (e.target.currentTime / currentSong.duration) * 100
            currentTimeRef.current.innerText = convertSeconds(currentTime)
            progressBarRef.current.value = progressBar
        }, 500),[currentSong]
    )
    
    //random song
    const handleClickRandomSong = () => {
        setRandomSong(!randomSong)
        if(loopSong == true){
            setLoopSong(false)
        }
    }

    //loop song
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
        setSongId(prevSong._id)
    }

    //next song
    const handleClickNextSong = () => {
        const currSongIndex = playList.findIndex(song => currentSong._id === song._id)
        const nextSong = playList[(currSongIndex + 1) % playList.length]
        setSongId(nextSong._id)
    }

    //tua bai hat
    const handleSeek = (e) => {
        const newTime = (e.target.value * currentSong.duration) / 100
        audioRef.current.currentTime = newTime
    }

    //set song
    useEffect(() => {
        if(song && song.data){
            dispatch(setCurrentSong(song.data))
        }
    }, [dispatch, song])

    return(
        <div className={c('controls')}>
            <div className={c('buttonList')}>
                <div onClick={handleClickRandomSong} className={c('randomIcon')} style={randomSong ? {color: '#8E46CD'} : {color: 'white'}}> 
                    <RandomSongIcon /> 
                </div>
                <div onClick={handleClickLoopSong} className={c('loopIcon')} style={loopSong ? {color: '#8E46CD'} : {color: 'white'}}> 
                    <LoopSongIcon /> 
                </div>
                <div onClick={handleClickBackSong} className="relative" > 
                    <BackSongIcon /> 
                </div>
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
                    <input
                        type="range" 
                        ref={progressBarRef}
                        value={currentSong ? null : 0}
                        min='0'
                        max='100'
                        className={c('audioInput')}
                        onChange={handleSeek}
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