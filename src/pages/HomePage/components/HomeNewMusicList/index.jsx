import { Link } from "react-router-dom"
import classNames from "classnames/bind"
import styles from "./MusicList.module.scss"
import Button from "~components/Button"
import { useEffect, useState } from "react"
import useFetchData from "~/hooks/useFetchData"
import HomeNewMusicItem from "./components/HomeNewMusicItem"
import SongListType2 from "src/components/SongListType2"
import { SongDataProvider } from "src/contexts"

const img = 'https://res.cloudinary.com/dtzqisgc8/image/upload/v1728973355/webMusic/z5931269727500_28c24b4c3b60750350935ecaab5763cc_nzks20.jpg'


const arr = [
    {
        songImg: img,
        songName: 'Say Sóng',
        songSinger: [
            'Tăng Duy Tân',
            'Binz'
        ],
        timeUpadated: '11/02/2024',
        type: 'vn'
    },

    {
        songImg: img,
        songName: 'Say Sóng',
        songSinger: [
            'Tăng Duy Tân',
            'Binz'
        ],
        timeUpadated: '11/02/2024',
        type: 'vn'
    },

    {
        songImg: img,
        songName: 'Say Sóng',
        songSinger: [
            'Tăng Duy Tân',
            'Binz'
        ],
        timeUpadated: '11/02/2024',
        type: 'vn'
    },

    {
        songImg: img,
        songName: 'Say Sóng',
        songSinger: [
            'Tăng Duy Tân',
            'Binz'
        ],
        timeUpadated: '11/02/2024',
        type: 'vn'
    },

    {
        songImg: img,
        songName: 'Say Sóng',
        songSinger: [
            'Tăng Duy Tân',
            'Binz'
        ],
        timeUpadated: '11/02/2024',
        type: 'vn'
    },

    {
        songImg: img,
        songName: 'Say Sóng',
        songSinger: [
            'Tăng Duy Tân',
            'Binz'
        ],
        timeUpadated: '11/02/2024',
        type: 'cn'
    },

    {
        songImg: img,
        songName: 'Say Sóng',
        songSinger: [
            'Tăng Duy Tân',
            'Binz'
        ],
        timeUpadated: '11/02/2024',
        type: 'cn'
    },

    {
        songImg: img,
        songName: 'Say Sóng',
        songSinger: [
            'Tăng Duy Tân',
            'Binz'
        ],
        timeUpadated: '11/02/2024',
        type: 'cn'
    }
]

const qt =  arr.map(item => {if(item.type != 'vn') return item}).filter((item)=> !!item)
const vn = arr.map(item => {if(item.type === 'vn') return item}).filter((item)=> !!item)


function HomeNewMusicList(){
    const c = classNames.bind(styles)
    const [click, setClick] = useState('TẤT CẢ')
    const [url, setUrl] = useState(arr)
    const music = useFetchData(url)


    const handleClick = (newUrl, butonClick) => {
        setUrl(newUrl)
        setClick(butonClick)
    }

    return(
        <div>
            <h1>Mới Phát Hành</h1>
            <div className={c('Newmusic-wrap')}>
                <div className={c('Newmusic-select')}>
                    <div>
                        <Button children={'TẤT CẢ'} onClick={() => handleClick(arr, 'TẤT CẢ')} click={click}/>
                        <Button children={'VIỆT NAM'} onClick={() => handleClick(vn, 'VIỆT NAM')} click={click}/>
                        <Button children={'QUỐC TẾ'} onClick={() => handleClick(qt, 'QUỐC TẾ')} click={click}/>
                    </div>

                    <span>
                        <Link to="/newmusic">{`${'TẤT CẢ >'}`}</Link>
                    </span>
                </div>

                <div className={c('Newmusic-list-wrap')}>
                    <SongDataProvider value={music}>
                        <SongListType2 />
                    </SongDataProvider>
                </div>
            </div>
        </div>
    )
}

export default HomeNewMusicList