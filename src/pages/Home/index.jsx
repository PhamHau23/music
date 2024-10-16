import classNames from "classnames/bind"
import styles from "./Home.module.scss"
import Banner from "./components/Banner"
import NewMusicList from "./components/NewMusicList"
function Home(){

    const c = classNames.bind(styles)

    return(
        <div className={c('home-page')}>
            {<Banner />}
            {<NewMusicList />}
        </div>
    )
}

export default Home