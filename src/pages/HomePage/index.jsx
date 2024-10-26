import classNames from "classnames/bind"
import styles from "./Home.module.scss"
import Banner from "./components/Banner"
import HomeNewMusicList from "./components/HomeNewMusicList"
import CategoryList from "~components/CategoryList"
import HomeRankList from "./components/HomeRankList"
function HomePage(){

    const c = classNames.bind(styles)

    return(
        <div className={c('home-page')}>
            <Banner />
            <HomeNewMusicList />
            <CategoryList />
            <HomeRankList />
        </div>
    )
}

export default HomePage