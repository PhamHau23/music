import classNames from "classnames/bind"
import styles from "./Home.module.scss"
import Banner from "./components/Banner"
import HomeNewMusicList from "./components/HomeNewMusicList"
import HomeRankList from "./components/HomeRankList"
import useFetchApi from "~/hooks/useFetchApi"

function HomePage(){

    const c = classNames.bind(styles) 
    const data = useFetchApi('homepage')
    
    if (!data || Object.keys(data).length === 0) {
        return <div>Loading...</div>
    }

    return(
        <div className={c('home-page')}>
            <Banner />
            <HomeNewMusicList data = {data} />
            <HomeRankList data = {data}/>
        </div>
    )
}

export default HomePage