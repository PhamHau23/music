import classNames from "classnames/bind"
import styles from "./SongItem.module.scss"
import { playIcon1 } from "src/icon"
import HoverSongAni from "src/components/HoverSongAni"
import { useEffect, useState } from "react"
import SongTopNumber from "../SongTopNumber"
import SongIconMusic from "../SongIconMusic"


function SongItem({api, icon}){

    console.log(icon)
    const c = classNames.bind(styles)

    //const [songs, setSongs] = useState()

    // useEffect(() => {
    //     fetch(api)
    //         .then(response => response.json())
    //         .then(data => setSongs(data))
    // }, [])


    //setSongs(api)
 
    
    return(
        api.map((item, index) => (
            <div className={c('songItem')} key={index}>
                <div className="flex padding-all-10 al-center">
                    <div className={c('songInfo', 'flex flex-2')}>
                        {icon ? <SongIconMusic icon={icon} className={c('songIconMusic')} />
                            : <SongTopNumber number={item.songTopNum}/>}
                        <div className={c('songItemImg', 'relative')}>
                            <img src={item.img} alt=""/>
                            <HoverSongAni />
                        </div>
                        <div>
                            <p className={c('songName')}>{item.songName}</p>
                            <p className={c('songSinger')}>{item.songSinger}</p>
                        </div>
                    </div>
                    <div className={c('songDesc', 'flex flex-2')}>
                        <p>{item.songDesc}</p>
                    </div>
                    <div className={c('songTime')}>
                        <p>{item.songTime}</p>
                    </div>
                </div>
                <span className="line" style={{margin: '0 5px'}}></span>
            </div>
        ))
    )
}

export default SongItem