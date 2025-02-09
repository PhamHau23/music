import classNames from "classnames/bind"
import styles from '../../../MusicPlayer.module.scss'

const c = classNames.bind(styles)

const BackAndNextSongInfo = () => {
    return (
        <div className={c('absolute')}></div>
    )
}

export default BackAndNextSongInfo