import classNames from "classnames/bind"
import styles from "./SongPageInfo.module.scss"
import { dau3Cham, heartIcon } from "~/icon"
import HoverSongAni from "~/components/HoverSongAni"
import { RandomPlay } from "./components/RandomPlay"
import { capitalizeWords } from "~/lib/capitalizeWords"

function SongPageInfo({data}){

    const c = classNames.bind(styles)

    return(
        <div className={c('SongPageInfo-wrap', 'flex-1')}>
            <div className={c('SongPage-img','relative')}>
                <img src={data.img} alt=""/>
                <HoverSongAni />
            </div>

            <div className="t-al--center">
                <div className={c('SongPage-title')}>
                    <p>
                        {capitalizeWords(data.name)} Những Bài Hát Hay Nhất Thế Giới
                    </p>
                </div>
                <div className={c('SongPage-time')}>
                    <span>time update</span>
                </div>
                <div className={c('SongPage-singer')}>
                    <a href="">singer 1</a>
                    <a href="">singer 2</a>
                    <a href="">singer 3</a>
                    <a href="">singer 4</a>
                </div>
                <div className={c('SongPage-subscribe')}>
                    <span>888k subscribe</span>
                </div>
                <div className={c('SongPage-button')}>
                    <RandomPlay />
                </div>
                <div className={c('SongPage-icon')}>
                    <span className="border-icon">{heartIcon}</span>
                    <span className="border-icon">{dau3Cham}</span>
                </div>
            </div>
        </div>
    )
}

export default SongPageInfo