import classNames from "classnames/bind"
import styles from "./MusicPlayer.module.scss"
import { SongInfo } from "./components/SongInfo"
import { SongControls } from "./components/SongControls"

function MusicPlayer(){

    const c = classNames.bind(styles)



    return(
        <div className={c('musicPlayer')}>
            <SongInfo/>
            <SongControls />

            <div className={c('options')}>

            </div>
        </div>
    )
}

export default MusicPlayer