import classNames from "classnames/bind"
import styles from "../SingerPage.module.scss"
import SongItemType2 from "~/components/SongListType2/components/SongItemType2"

const c = classNames.bind(styles)

const HotSongs = ({data}) => {
    return(
        <div className={c('hotSong')}>
            <h1>Hot Song</h1>
            <div className="flex">
                <SongItemType2 className={'grid-column-2'}/>
            </div>
        </div>
    )
}

export default HotSongs