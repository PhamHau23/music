import { playIcon1 } from "src/icon"
import classNames from "classnames/bind"
import styles from "./HoverSongAni.module.scss"

function HoverSongAni(){

    const c = classNames.bind(styles)

    return(
        <span className={c('songHover')}>
            {playIcon1}
        </span>
    )
}

export default HoverSongAni