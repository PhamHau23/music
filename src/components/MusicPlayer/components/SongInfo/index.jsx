import classNames from "classnames/bind"
import { useSelector } from "react-redux"
import styles from "../../MusicPlayer.module.scss"
import { capitalizeWords } from "~/lib/capitalizeWords"

export const SongInfo = () => {

    const c = classNames.bind(styles)
    const {currentSong, loading} = useSelector((state) => state.musicPlayer)

    if(loading){
        return(
            <div className={c('info')}></div>
        )
    }
    
    return(
        <div className={c('info')}>
            <div className={c('img')}>
                <img src={currentSong.img} alt="" />
            </div>
            <div className={c('name', 'w-100')}>
                <div className={c('songName','w-100')}>
                    <p className="t-line1">{capitalizeWords(currentSong.name)}</p>
                </div>
                <div className={c('singerName','w-100')}>
                    <p className="t-line2">
                        {currentSong.singerName.map((name, index) => (
                            <span key={index}>{capitalizeWords(name)}{index < currentSong.singerName.length - 1 && ', '}</span>
                        ))}    
                    </p>
                </div>
            </div>
        </div>
    )
}