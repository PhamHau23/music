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
            {isLogin === true && img !== null ? 
            <img src={img} /> : 
            <span>{userIcon}</span>}
        </div>
    )
}

export default User