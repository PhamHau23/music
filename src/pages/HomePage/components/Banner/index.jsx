import classNames from "classnames/bind"
import styles from "./Banner.module.scss"
const url =  'https://png.pngtree.com/thumb_back/fw800/back_our/20190622/ourmid/pngtree-purple-minimalist-music-note-banner-background-image_210612.jpg'

function Banner(){

    
    const c = classNames.bind(styles)

    return(
        <div className={c('banner-wrap')}>
                <span>
                    <img src={url} alt="" />
                </span>
        </div>
    )
}

export default Banner