import { useParams } from "react-router-dom"
import classNames from "classnames/bind"
import styles from "./SongPageInfo.module.scss"
import Button from "src/components/Button"
import { dau3Cham, heartIcon, playIcon1 } from "src/icon"
import HoverSongAni from "src/components/HoverSongAni"

const img = 'https://res.cloudinary.com/dtzqisgc8/image/upload/v1729928981/webMusic/t%E1%BA%A3i_xu%E1%BB%91ng_2_mauvvs.jpg'


function SongPageInfo(){

    const c = classNames.bind(styles)

    const {genreId} = useParams()
    return(
        <div className={c('SongPageInfo-wrap', 'flex-1')}>
            <div className={c('SongPage-img','relative')}>
                <img src={img} alt=""/>
                <HoverSongAni />
            </div>

            <div className="t-al--center">
                <div className={c('SongPage-title')}>
                    <p>{genreId} Những Bài Hát Hay Nhất Thế Giới</p>
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
                    <Button>
                        <i>{playIcon1}</i> RANDOM PLAYING
                    </Button>
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