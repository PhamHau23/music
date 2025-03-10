import classNames from "classnames/bind"
import styles from "./Home.module.scss"
import Banner from "./components/Banner"
import HomeNewMusicList from "./components/HomeNewMusicList"
import HomeRankList from "./components/HomeRankList"
import useFetchApi from "~/hooks/useFetchApi"

function HomePage(){

    const c = classNames.bind(styles) 
    const apiData = useFetchApi('homepage')
    
    if (!apiData || Object.keys(apiData).length === 0) {
        return <div>Loading...</div>
    }

    return(
        <div className={c('home-page')}>
            <Banner />
            <HomeNewMusicList data = {apiData.data} />
            <HomeRankList data = {apiData.data}/>
        </div>
    )
}

export default HomePage