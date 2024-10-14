import classNames from "classnames/bind"
import styles from './Header.module.scss'
import Search from "./components/Search"
import Setting from "./components/Setting"
import User from "./components/User"
import Navigation from "./components/Navigation"


function Header(){
    const c = classNames.bind(styles)
    
    return (
        <header className={c('header')}>
            <div className={c('wrap')}>
                <div className={c('left-wrap')}>
                    <div className={c('nav')}>
                        {<Navigation />}
                    </div>

                    <div className={c('search')}>
                        {<Search />}
                    </div>
                </div>

                <div className={c('right-wrap')}>
                    <div className={c('setting')}>
                        {<Setting />}
                    </div>

                    <div className={c('user')}>
                        {<User />}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header