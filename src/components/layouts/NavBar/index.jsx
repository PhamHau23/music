import classNames from "classnames/bind"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import styles from './Navbar.module.scss'
import { iconKhamPha, iconThuVien } from "~assets/icon"
import { musicIcon, starIcon } from "~/icon"
import NavItem from "./components/NavItem"
import { useSelector } from "react-redux"


function Navbar(){
    
    const c = classNames.bind(styles)
    const {isLogin} = useSelector(state => state.user)
    const {role} = useSelector(state => state.userData)
    const [item, setItem] = useState('Trang Chủ')
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/`)
    }

    return (
        <aside className={c('navbar-wrapper','tabletNavbar')}>
            <div onClick={() => handleClick('home')} className={c('navbar-logo')}>
                <Link title="home" to={'/'} className={c('logo','tablet-logo')}></Link>
            </div>
            <div className={c('navbar-main')}>
                <ul>
                    {role == 'admin' && isLogin == true && <NavItem path={'/quanly'} name={'Trang Quản Lý'} mainIcon={iconThuVien} item={item} setItem={setItem}/>}
                    {<NavItem path={'/'} name={'Trang Chủ'} mainIcon={iconKhamPha} item={item} setItem={setItem}/>}
                    {<NavItem path={'/newmusic'} name={'BXH Bài Hát Mới'} mainIcon={musicIcon} item={item} setItem={setItem}/>}
                </ul>
                <span className='line' style={{margin: '0 20px'}}></span>
                <ul>
                    {<NavItem path={'/nation/vn'} name={'Việt Nam'} mainIcon={starIcon} item={item} setItem={setItem} />}
                    {<NavItem path={'/nation/cn'} name={'Trung Quốc'} mainIcon={starIcon} item={item} setItem={setItem} />}
                    {<NavItem path={'/nation/eu'} name={'Âu Mỹ'} mainIcon={starIcon} item={item} setItem={setItem} />}
                    {<NavItem path={'/nation/kr'} name={'Hàn Quốc'} mainIcon={starIcon} item={item} setItem={setItem} />}
                </ul>
            </div>

        </aside>
    )
}

export default Navbar