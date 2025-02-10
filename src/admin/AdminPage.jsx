import classNames from "classnames/bind"
import styles from "./Admin.module.scss"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
const c = classNames.bind(styles)

export default function AdminPage({children}) {
    const {role} = useSelector(state => state.userData)
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