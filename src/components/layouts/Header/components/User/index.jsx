import classNames from "classnames/bind"
import styles from "./User.module.scss"
import { userIcon } from "~/icon"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function User(){
    const c = classNames.bind(styles)
    const {isLogin} = useSelector(state => state.user)
    const {img} = useSelector(state => state.userData)
    const navigate = useNavigate()

    const handleProfile = () => {
        if(!isLogin) navigate('/login')
        else navigate('/profile')
    }

    return(
        <div className={c('user-wrap')} onClick={handleProfile}>
            {isLogin == true ? 
            <img src={img} /> : 
            <span>{userIcon}</span>}
            {/* {
                token && 
                <div className={c('user-dropdown')}>
                    <div className={c('item')}>
                        <Link to={'/profile'}>Thông tin</Link>
                    </div>
                    <div className={c('item')} onClick={handleLogout}>
                        <p>Đăng Xuất</p>
                    </div>
                </div>
            } */}
        </div>
    )
}

export default User