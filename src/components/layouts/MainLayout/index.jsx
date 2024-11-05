import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import classNames from "classnames/bind"
import styles from "./MainLayout.module.scss"
import Header from "../Header"
import Navbar from "../NavBar"
import MusicPlayer from "src/components/MusicPlayer"



function MainLayout({children}){

    const c = classNames.bind(styles)
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