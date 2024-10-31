import classNames from "classnames/bind"
import styles from "./NewMusicPage.module.scss"
import { playIcon1 } from "src/icon"
import SongList from "src/components/SongList"

const api = 'http://localhost:3000/api/newmusic'

export default function NewMusicPage(){

    const c = classNames.bind(styles)

    return (
        <div className={c('newMusicPage')}>
            <div className={c('newMusicPage-title')}>
                <div className="flex al-center">
                    <h1>BXH Nhạc Mới</h1>
                    <span className={c('NewMusicPage-icon')}>{playIcon1}</span>
                </div>
            </div>

            <SongList api={api}/>
        </div>
    )
}