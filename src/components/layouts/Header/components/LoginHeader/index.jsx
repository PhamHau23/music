import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logOut } from "~/redux/slices/userSlice"
import Button from "~components/Button"

export const LoginHeader = () => {
    const navigate = useNavigate()
    const {isLogin} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const handleLogin = () => {
        navigate('/login')
    }

    const handleLogout = () => {
        confirm('bạn có muốn đăng xuất')
        dispatch(logOut())
        navigate('/')
    }

    return(
        <div>
            <Button 
                children={isLogin ? 'Đăng Xuất' : 'Đăng Nhập'} 
                onClick={isLogin ? handleLogout : handleLogin}
            />
        </div>
    )
}