import classNames from "classnames/bind"
import styles from './Header.module.scss'
import Search from "./components/Search"
import Navigation from "./components/Navigation"
import { LoginHeader } from "./components/LoginHeader"
import User from "./components/User"


function Header(){
    const c = classNames.bind(styles)
    const token = localStorage.getItem('authToken')
    
    return (
        <header className={c('header','tabletHeader')}>
            <div className={c('wrap','tabletWrap')}>
                <div className={c('left-wrap')}>
                    <div className={c('nav')}>
                        {<Navigation />}
                    </div>

                    <div className={c('search')}>
                        {<Search />}
                    </div>
                </div>

                <div className={c('right-wrap')}>
                    <div className={c('user', 'flex')}>
                        <LoginHeader />
                        <User />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header