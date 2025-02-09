import { Link, useLocation } from "react-router-dom";
import {c} from "../AdminLayout"

export default function AdminNavbar({className}){
    const location = useLocation()
    const focusStyle = (path) => {
        return location.pathname === path ? 'focus' :''
    }

    return(
        <aside className={className('navbar')}>
            <Link to={'/quanly'}><h1>Quản lý web</h1></Link>

            <Link to={'/'}>
                <div className={className('item')}>
                    <span>
                        Quay lại trang web
                    </span>
                </div>
            </Link>

            <Link to={'/quanly/user'} className={c(focusStyle('/quanly/user'))}>
                <div className={className('item')}>
                    <span >
                        Người dùng
                    </span >
                </div>
            </Link>

            <Link to={'/quanly/song'} className={c(focusStyle('/quanly/song'))}>
                <div className={className('item')}>
                    <span>
                        Bài hát
                    </span>
                </div>
            </Link>

            <Link to={'/quanly/genres'} className={c(focusStyle('/quanly/genres'))}>
                <div className={className('item')}>
                    <span>
                        Thể Loại
                    </span>
                </div>
            </Link>

            <Link to={'/quanly/singer'} className={c(focusStyle('/quanly/singer'))}>
                <div className={className('item')}>
                    <span>
                        Ca sĩ
                    </span>
                </div>
            </Link>

            <Link to={'/quanly/uploadsong'} className={c(focusStyle('/quanly/uploadsong'))}>
                <div className={className('item')}>
                    <span>
                        Thêm Bài Hát
                    </span>
                </div>
            </Link>

            <Link to={'/quanly/uploadgenre'} className={c(focusStyle('/quanly/uploadgenre'))}>
                <div className={className('item')}>
                    <span>
                        Thêm Thể Loại
                    </span>
                </div>
            </Link>

            <Link to={'/quanly/uploadsinger'} className={c(focusStyle('/quanly/uploadsinger'))}>
                <div className={className('item')}>
                    <span>
                        Thêm ca sĩ
                    </span>
                </div>
            </Link>
        </aside>
    )
}