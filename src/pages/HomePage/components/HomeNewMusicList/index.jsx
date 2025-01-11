import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames/bind"
import styles from "./MusicList.module.scss"
import Button from "src/components/Button"
import SongListType2 from "src/components/SongListType2"
import { SongDataProvider } from "src/contexts"
import { useDispatch } from "react-redux"
import { setPlayList } from "~/redux/slices/musicPlayerSlice"


function HomeNewMusicList({data}){
    const c = classNames.bind(styles)
    const [click, setClick] = useState('TẤT CẢ')
    const dispatch = useDispatch()
    const [song, setSongs] = useState([])

    const handleClick = (songData, butonClick) => {
        setClick(butonClick)
        setSongs(songData)
    }

    useEffect(() => {
        if(data && data.allNewSongs){
            setSongs(data.allNewSongs)
            dispatch(setPlayList(data.allNewSongs))
        }
    }, [])

    return(
        <div>
            <h1>Mới Phát Hành</h1>
            <div className={c('Newmusic-wrap')}>
                <div className={c('Newmusic-select')}>
                    <div>
                        <Button children={'TẤT CẢ'} onClick={() => handleClick(data.allNewSongs,'TẤT CẢ')} click={click}/>
                        <Button children={'VIỆT NAM'} onClick={() => handleClick(data.vnNewSongs,'VIỆT NAM')} click={click}/>
                        <Button children={'QUỐC TẾ'} onClick={() => handleClick(data.notVnNewSongs,'QUỐC TẾ')} click={click}/>
                    </div>

                    <span>
                        <Link to="/newmusic">{`${'TẤT CẢ >'}`}</Link>
                    </span>
                </div>

                <div className={c('Newmusic-list-wrap')}>
                    <SongDataProvider value={song}>
                        <SongListType2 />
                    </SongDataProvider>
                </div>
            </div>
        </div>
    )
}

export default HomeNewMusicList