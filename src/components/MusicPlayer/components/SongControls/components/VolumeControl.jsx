import classNames from 'classnames/bind'
import styles from '../../../MusicPlayer.module.scss'
import { useEffect, useRef, useState } from 'react'
import { MuteVolumeIcon, VolumeIcon } from '~/icon'

const c = classNames.bind(styles)

export const VolumeControl = ({audioRef, currentSong}) => {
    
    const volumeInputRef = useRef()
    const [mute, setMute] = useState(false)
    const [volume, setVolume] = useState(50)

    
    const toggleMuteVolume = () => {
        setMute(!mute)
        audioRef.current.muted = !mute
    }

    const handleChangeVolume = () => {
        setMute(false)
        const volumeValue = volumeInputRef.current.value
        audioRef.current.volume = volumeValue / 100
        setVolume(volumeValue)
    }

    if(currentSong != null && mute === true){
        audioRef.current.muted = true
    }

    return(
        <div className={c('volumeControl')}>
            <i className='flex' onClick={toggleMuteVolume}>
                {mute ? <MuteVolumeIcon /> : <VolumeIcon />}
            </i>
            <input ref={volumeInputRef} 
                className={c('volumeInput')} value={volume} type="range" min='0' max='100' 
                style={{background: `linear-gradient(to right, #8E46CD ${volume}%, #ddd ${volume}%)`}}
                onChange={handleChangeVolume}/>        
        </div>
    )
}