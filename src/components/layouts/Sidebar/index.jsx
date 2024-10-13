import classNames from "classnames/bind"
import { Link } from "react-router-dom"
import styles from './Navbar.module.scss'
import { iconKhamPha, iconRadio, iconThuVien, iconZingChart } from "~assets/icon"
import { playIcon } from "~/icon"
import { useRef, useState } from "react"
import Zingchart from "~pages/Zingchart"

const c = classNames.bind(styles)

function Navbar(){

    const [click, setClick] = useState(null)

    const handleClick = (link) => {
        setClick(link)
    }

    const linkStyle = (link) => {
        return click === link ? 'focus' : ''
    }

    return (
        <aside className={c('navbar-wrapper')}>
            <div className={c('navbar-logo')}>
                <Link to={'/'} className={c('logo')}></Link>
            </div>
            <div className={c('navbar-main')}>
                <ul>
                    <li onClick={() => handleClick('thuvien')} className={c('navbar-item', linkStyle('thuvien'))}>
                        <Link title="thư viện" to={'/thuvien'}>
                            <span>
                                {iconThuVien}
                                <p>Thư Viện</p>
                            </span>
                        </Link>
                    </li>

                    <li onClick={() => handleClick('home')} className={c('navbar-item', linkStyle('home'))}>
                        <Link title="home" to={'/'}>
                            <span>
                                {iconKhamPha}
                                <p>Trang chủ</p>
                            </span>
                        </Link>
                    </li>
                    
                    <li onClick={() => handleClick('zingchart')} className={c('navbar-item', linkStyle('zingchart'))}>
                        <Link title="zingchart" to={'/zingchart'}>
                            <span>
                                {iconZingChart}
                                <p>Zing chart</p>
                                <i>{playIcon}</i>
                            </span>
                        </Link>
                    </li>
                    
                    <li onClick={() => handleClick('radio')} className={c('navbar-item', linkStyle('radio'))}>
                        <Link title="radio" to={'/radio'}>
                            <span>
                                {iconRadio}
                                <p>Radio</p>
                                <i>{playIcon}</i>
                            </span>
                        </Link>
                    </li>
                </ul>
                <span className={c('line')} style={{margin: '0 20px', backgroundColor: '#858282'}}></span>
            </div>
        </aside>
    )
}

export default Navbar