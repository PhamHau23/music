import { Provider, useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import classNames from "classnames/bind"
import styles from "./MainLayout.module.scss"
import Header from "../Header"
import Navbar from "../NavBar"
import MusicPlayer from "~/components/MusicPlayer"
import { fetchAllSongApi } from "~/redux/slices/songsData"
import useFetchUserData from "~/hooks/useFetchUserData"
import { setImgUser, setRole } from "~/redux/slices/userDataSlice"


function MainLayout({children}){
    const c = classNames.bind(styles)
    const {isLogin} = useSelector(state => state.user)
    const token = localStorage.getItem('authToken')
    const dispatch = useDispatch()
    const userData = useFetchUserData(token)
    
    dispatch(fetchAllSongApi('song/search/searchvalue'))

    if(isLogin){
        if(userData != null && Object.keys(userData).length > 0){
            dispatch(setImgUser(userData.img))
            dispatch(setRole(userData.role))
        }
    }

    return(
        <>
            <Navbar />
            <div className={c('mainLayout-wrap')}>
                <Header />
                <div className={c('mainLayout-content','tabletMainLayout')}>
                    {children}
                </div>
            </div>
            <MusicPlayer />
        </>
    )
}

export default MainLayout