import classNames from "classnames/bind"
import styles from "./Home.module.scss"
import Banner from "./components/Banner"
import HomeNewMusicList from "./components/HomeNewMusicList"
import HomeRankList from "./components/HomeRankList"
import GenreList from "src/components/GenreList"
import Genres from "src/components/Genres"

const img1 = 'https://res.cloudinary.com/dtzqisgc8/image/upload/v1729336892/webMusic/t%E1%BA%A3i_xu%E1%BB%91ng_1_tth1sq.jpg'

function HomePage(){

    const c = classNames.bind(styles)

    return(
        <div className={c('home-page')}>
            <Banner />
            <HomeNewMusicList />
            <HomeRankList />
        </div>
    )
}

export default HomePage