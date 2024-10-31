import { playIcon1 } from "src/icon"
import styles from "./HoverSongAni.module.scss"

function HoverSongAni(){
    return(
        <span className={styles.songHover}>
            {playIcon1}
        </span>
    )
}

export default HoverSongAni