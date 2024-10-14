import classNames from "classnames/bind"
import styles from "./MainLayout.module.scss"
import Header from "../Header"
import Navbar from "../NavBar"

const c = classNames.bind(styles)


function MainLayout({children}){
    return(
        <>
            <Navbar />
            <div className={c('wrap')}>
                <Header />
                <div className={c('web-content')}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default MainLayout