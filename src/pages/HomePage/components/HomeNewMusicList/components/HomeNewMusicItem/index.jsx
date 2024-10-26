import classNames from "classnames/bind"
import styles from "./MusicItem.module.scss" 
import { dau3Cham } from "~/icon"

function HomeNewMusicItem({data}){

    const c = classNames.bind(styles)

    const chunkedData = [];
    for (let i = 0; i < data.length; i += 3){
        chunkedData.push(data.slice(i, i + 3))
    };
  

    return(
        chunkedData.map((item, index) => (
            <div key={index} className={c('Newmusic-list')}>
                {
                    item.map((subItem, subIndex) => (
                        <div key={subIndex} className={c('Newmusic-item')}>
                            <div className={c('flex')}>
                                <div className={c('Newmusic-img')}>
                                    <img src={subItem.img} alt="" />
                                </div>
                            <div className={c('Newmusic-info')}>
                                <a href="/" className={c('name-music')}>{subItem.musicName}</a>
                                <a href="/" className={c('name-singer')}>{subItem.singerName}</a>
                                <p className={c('time')}>{subItem.timeUpdate}</p>
                            </div>
                            </div>
                            <div className={c('other-option')}>
                                <i>{dau3Cham}</i>
                            </div>
                        </div>
                    ))
                }
            </div>
        ))
    )
}


export default HomeNewMusicItem