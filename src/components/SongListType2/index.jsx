import classNames from "classnames/bind"
import styles from "./SongListType2.module.scss"
import SongItemType2 from "./components/SongItemType2"

function SongListType2({title}){

    const c = classNames.bind(styles)

    return(
        <div className={c('songList-t2')}>
            {title && <h1 className="title">{title}</h1>}
            <SongItemType2 />
        </div>
    )
}

export default SongListType2