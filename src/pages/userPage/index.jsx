import { useDispatch, useSelector } from "react-redux"
import useFetchUserData from "~/hooks/useFetchUserData"
import { setImgUser, setRole } from "~/redux/slices/userDataSlice"


function userPage (){
    const {isLogin} = useSelector(state => state.user)
    const token = localStorage.getItem('authToken')
    const dispatch = useDispatch()
    const loginNoti = 'login thanh cong'
    const logoutNoti = 'logout thanh cong'
    
    if(isLogin === true){
        const userData = useFetchUserData(token)
        if(userData != null && Object.keys(userData).length > 0){
            dispatch(setImgUser(userData.img))
            dispatch(setRole(userData.role))
        }
    }

    return(
        <div>
            {isLogin ? loginNoti : logoutNoti}
        </div>
    )
}

export default userPage