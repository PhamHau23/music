import { Provider, useDispatch } from "react-redux"
import classNames from "classnames/bind"
import styles from "./MainLayout.module.scss"
import Header from "../Header"
import Navbar from "../NavBar"
import MusicPlayer from "src/components/MusicPlayer"
import { fetchAllSongApi } from "~/redux/slices/songsData"



function MainLayout({children}){
    const c = classNames.bind(styles)
    const dispatch = useDispatch()
    dispatch(fetchAllSongApi('song/search/searchvalue'))

    return(
        <>
            <Navbar />
            <div className={c('mainLayout-wrap')}>
                <Header />
                <div className={c('mainLayout-content')}>
                    {children}
                </div>
            </div>
            <MusicPlayer />
        </>
    )
}

export default MainLayout