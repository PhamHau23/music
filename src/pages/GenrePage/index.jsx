import { useLocation } from "react-router-dom"
import classNames from "classnames/bind"
import styles from "./GenrePage.module.scss"
import SongListType2 from "src/components/SongListType2"
import { SongDataProvider } from "src/contexts"
import Genres from "src/components/Genres"
import { genresConfig } from "src/configs/genresConfig"

const img2 = 'https://res.cloudinary.com/dtzqisgc8/image/upload/v1729928981/webMusic/t%E1%BA%A3i_xu%E1%BB%91ng_2_mauvvs.jpg'

const data = [
    {
        songImg: img2,
        songName: 'Say Sóng',
        songSinger: [
            'Tăng Duy Tân',
            'Binz'
        ],
        songTime: '02:12'
    },
    {
        songImg: img2,
        songName: 'Say Sóng',
        songSinger: [
            'Tăng Duy Tân',
            'Binz'
        ],
        songTime: '02:12'
    }
]


const newData = genresConfig.map((item) => item.genres)

function GenrePage(){

    const c = classNames.bind(styles)
    const location = useLocation()

    console.log(newData)

    return(
        <div className={c('genrePage')}>
            <div className={c('img')}>
                <img src={location.state.img} alt="" />
                <p>{location.state.tenQuocGia.toUpperCase()}</p>
            </div>
            <div>
                <Genres title={'Nổi Bật'} data={newData[0]}/>
            </div>
            <div>
                <SongDataProvider value={data}>
                    <SongListType2 title={'Hot Songs'} />
                </SongDataProvider>
            </div>
        </div>
    )
}


export default GenrePage