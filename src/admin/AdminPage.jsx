import classNames from "classnames/bind"
import styles from "./Admin.module.scss"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
const c = classNames.bind(styles)

export default function AdminPage({children}) {
    const {isLogin, role} = useSelector(state => state.user)
    const navigate = useNavigate()

    if(!isLogin) navigate('/login')

    return(
        <>
            <div className={c('content')}>
                {children || 'trang quản lý'}
            </div>
        </>
    )
}