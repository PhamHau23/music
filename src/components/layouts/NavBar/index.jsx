import classNames from "classnames/bind"
import { Link } from "react-router-dom"
import { useState } from "react"
import styles from './Navbar.module.scss'
import { iconKhamPha, iconRadio, iconThuVien, iconZingChart } from "~assets/icon"
import { categoryIcon, musicIcon, playIcon, starIcon } from "~/icon"
import NotiLogin from "./components/NotiLogin"
import CreatePlaylist from "./components/CreatePlaylist"

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
            <div onClick={() => handleClick('home')} className={c('navbar-logo')}>
                <Link title="home" to={'/'} className={c('logo')}></Link>
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
                            <span className={c('live-tag')}>
                                {iconRadio}
                                <p>Radio</p>
                                <i>{playIcon}</i>
                            </span>
                        </Link>
                    </li>
                </ul>
                <span className='line' style={{margin: '0 20px', backgroundColor: '#858282'}}></span>
                <ul>
                    <li onClick={() => handleClick('newmusic')} className={c('navbar-item', linkStyle('newmusic'))}>
                        <Link title="newmusic" to={'/newmusic'}>
                            <span>
                                {musicIcon}
                                <p>Nhạc Mới</p>
                                <i>{playIcon}</i>
                            </span>
                        </Link>
                    </li>

                    <li onClick={() => handleClick('category')} className={c('navbar-item', linkStyle('category'))}>
                        <Link title="category" to={'/category'}>
                            <span>
                                {categoryIcon}
                                <p>Chủ Đề & Thể Loại</p>
                            </span>
                        </Link>
                    </li>

                    <li onClick={() => handleClick('rank')} className={c('navbar-item', linkStyle('rank'))}>
                        <Link title="rank" to={'/rank'}>
                            <span>
                                {starIcon}
                                <p>Top 100</p>
                            </span>
                        </Link>
                    </li>
                </ul>
                
                <div>
                    {<NotiLogin />}
                    {<CreatePlaylist />}
                </div>
            </div>

        </aside>
    )
}

export default Navbar