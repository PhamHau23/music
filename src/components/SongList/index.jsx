import { useParams } from "react-router-dom"
import styles from "./SongList.module.scss"
import SongItem from "./components/SongItem"
import { useEffect } from "react"

const img = 'https://res.cloudinary.com/dtzqisgc8/image/upload/v1729928981/webMusic/t%E1%BA%A3i_xu%E1%BB%91ng_2_mauvvs.jpg'
const img1 = 'https://res.cloudinary.com/dtzqisgc8/image/upload/v1730119364/webMusic/9ec2745a-9353-4c57-b7dd-898bcfb0bfbc_lboca7.jpg'
const data = [
    {
        img,
        songName: 'name',
        songSinger: 'song singer',
        songDesc: 'descrisption',
        songTime: '11:02',
        fileMp3: 'abc.mp3',
        songTopNum: 1
    },
    {
        img,
        songName: 'name 2',
        songSinger: 'song singer',
        songDesc: 'descrisption',
        songTime: '11:02',
        songTopNum: 2
    }
]

function SongList({api, icon}){

    const {genreId} = useParams()

    return (
        <div className="relative flex-2">
            <SongItem api={data} icon={icon}/>
        </div>
    )
}

export default SongList