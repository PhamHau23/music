import classNames from "classnames/bind"
import styles from "./SongPageList.module.scss"
import SongList from "src/components/SongList"
import { ListSongIcon, musicIcon } from "src/icon"

function SongPageList(){

    const c = classNames.bind(styles)
    return(
        <div className="flex-2">
            <div className={c('SongPageList-tilte','flex')}>
                <span>{<ListSongIcon />}</span>
                <span className="flex-2" style={{marginRight: '10px'}}>BÀI HÁT</span>
                <span className="flex-2">ALBUM</span>
                <span>THỜI GIAN</span>
            </div>
            <SongList icon={musicIcon}/>
        </div>
    )
}

export default SongPageList