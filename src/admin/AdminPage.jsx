import classNames from "classnames/bind"
import styles from "./Admin.module.scss"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
const c = classNames.bind(styles)

export default function AdminPage({children}) {
    const role = localStorage.getItem('role')
    const navigate = useNavigate()

    useEffect(() => {
        if(role !== 'admin'){
            navigate('/')
        }
    }, [role, navigate])

    return(
        <>
            <div className={c('content')}>
                {children || 'trang quản lý'}
            </div>
        </>
    )
}