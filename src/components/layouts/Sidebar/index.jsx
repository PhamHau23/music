import classNames from "classnames/bind"
import { Link } from "react-router-dom"
import styles from './Navbar.module.scss'
import { iconKhamPha, iconRadio, iconThuVien, iconZingChart } from "~assets/icon"

const c = classNames.bind(styles)

function Navbar(){
    return (
        <aside className={c('navbar-wrapper')}>
            <div className={c('navbar-logo')}>
                <Link to={'/'} className={c('logo')}></Link>
            </div>
            <div className={c('navbar-main')}>
                <ul>
                    <li className={c('navbar-item')}>
                        <Link to={'/thuvien'}>
                            <span>
                                {iconThuVien}
                                <p>Thư Viện</p>
                            </span>
                        </Link>
                    </li>

                    <li className={c('navbar-item')}>
                        <Link to={'/'}>
                            <span>
                                {iconKhamPha}
                                <p>Trang chủ</p>
                            </span>
                        </Link>
                    </li>
                    
                    <li className={c('navbar-item')}>
                        <Link to={'/zingchart'}>
                            <span>
                                {iconZingChart}
                                <p>Zing chart</p>
                            </span>
                        </Link>
                    </li>
                    
                    <li className={c('navbar-item')}>
                        <Link to={'/radio'}>
                            <span>
                                {iconRadio}
                                <p>Radio</p>
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Navbar