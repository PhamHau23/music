import classNames from "classnames/bind"
import { Link } from "react-router-dom"
import { useState } from "react"
import styles from './Navbar.module.scss'
import { iconKhamPha, iconRadio, iconThuVien, iconZingChart } from "src/assets/icon"
import { categoryIcon, musicIcon, starIcon, CirclePlayIcon } from "src/icon"
import NotiLogin from "./components/NotiLogin"
import CreatePlaylist from "./components/CreatePlaylist"
import NavItem from "./components/NavItem"


function Navbar(){
    
    const c = classNames.bind(styles)
    const [item, setItem] = useState('Trang Chủ')

    return (
        <aside className={c('navbar-wrapper')}>
            <div onClick={() => handleClick('home')} className={c('navbar-logo')}>
                <Link title="home" to={'/'} className={c('logo')}></Link>
            </div>
            <div className={c('navbar-main')}>
                <ul>
                    {<NavItem path={'/thuvien'} name={'Thư Viện'} mainIcon={iconThuVien} item={item} setItem={setItem}/>}
                    {<NavItem path={'/'} name={'Trang Chủ'} mainIcon={iconKhamPha} item={item} setItem={setItem}/>}
                    {<NavItem path={'/zingchart'} name={'Zing Chart'} mainIcon={iconZingChart} subIcon={<CirclePlayIcon />} item={item} setItem={setItem}/>}
                    {<NavItem path={'/radio'} name={'Radio'} mainIcon={iconRadio} subIcon={<CirclePlayIcon />} live={c('live-tag')} item={item} setItem={setItem}/>}
                </ul>
                <span className='line' style={{margin: '0 20px'}}></span>
                <ul>
                    {<NavItem path={'/newmusic'} name={'Bài Hát Mới'} mainIcon={musicIcon} subIcon={<CirclePlayIcon />} item={item} setItem={setItem}/>}
                    {<NavItem path={'/genres'} name={'Chủ Đề && Thể Loại'} mainIcon={categoryIcon} item={item} setItem={setItem}/>}
                    {<NavItem path={'/rank'} name={'Bảng Xếp Hạng'} mainIcon={starIcon} item={item} setItem={setItem}/>}
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