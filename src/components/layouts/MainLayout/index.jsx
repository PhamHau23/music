import { useDispatch, useSelector } from "react-redux"
import classNames from "classnames/bind"
import styles from "./MainLayout.module.scss"
import Header from "../Header"
import Navbar from "../NavBar"
import MusicPlayer from "~/components/MusicPlayer"
import useFetchUserData from "~/hooks/useFetchUserData"
import { setImgUser } from "~/redux/slices/userDataSlice"
import { useQuery } from "@tanstack/react-query"


function MainLayout({children}){
    const c = classNames.bind(styles)
    const {isLogin} = useSelector(state => state.user)
    const token = localStorage.getItem('authToken')
    const dispatch = useDispatch()

    const {data: userData} = useQuery({
        queryKey: ['userData', token],
        queryFn: () => useFetchUserData(token),
        enabled: !!token,
        staleTime: 0,
        gcTime: 1000 * 60 * 60 * 24
    })

    if(isLogin && userData){
        dispatch(setImgUser(userData.img))
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