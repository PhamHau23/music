import classNames from "classnames/bind"
import styles from "./MusicList.module.scss"
import Button from "~components/Button"
import { useEffect, useState } from "react"
import useFetchData from "~/hooks/useFetchData"
import NewMusicItem from "../MusicItem"

const img = 'https://res.cloudinary.com/dtzqisgc8/image/upload/v1728973355/webMusic/z5931269727500_28c24b4c3b60750350935ecaab5763cc_nzks20.jpg'


const arr = [
    {
        img: img,
        musicName: 'hope is the thing with feather',
        singerName: 'robin',
        timeUpdate: '1h',
        type: 'vn'
    },

    {
        img: img,
        musicName: 'hope is the thing with feather',
        singerName: 'robin',
        timeUpdate: '1h',
        type: 'vn'
    },

    {
        img: img,
        musicName: 'hope is the thing with feather',
        singerName: 'robin',
        timeUpdate: '1h',
        type: 'vn'
    },

    {
        img: img,
        musicName: 'hope is the thing with feather',
        singerName: 'robin',
        timeUpdate: '1h',
        type: 'vn'
    },

    {
        img: img,
        musicName: 'hope is the thing with feather',
        singerName: 'robin',
        timeUpdate: '1h',
        type: 'korea'
    },

    {
        img: img,
        musicName: 'hope is the thing with feather',
        singerName: 'robin',
        timeUpdate: '1h',
        type: 'china'
    }
]

const qt =  arr.map(item => {if(item.type != 'vn') return item}).filter((item)=> !!item)
const vn = arr.map(item => {if(item.type === 'vn') return item}).filter((item)=> !!item)


function NewMusicList(){
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
                        <a href="/">{`${'TẤT CẢ >'}`}</a>
                    </span>
                </div>

                <div className={c('Newmusic-list-wrap')}>
                    <NewMusicItem data={music} />
                </div>
            </div>
        </div>
    )
}

export default NewMusicList