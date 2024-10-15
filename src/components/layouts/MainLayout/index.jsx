import classNames from "classnames/bind"
import styles from "./MainLayout.module.scss"
import Header from "../Header"
import Navbar from "../NavBar"



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
        </>
    )
}

export default MainLayout