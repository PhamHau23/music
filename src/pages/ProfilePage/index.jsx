import classNames from "classnames/bind"
import styles from "./ProfilePage.module.scss"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { CiImageOn } from "react-icons/ci"
import { toast, ToastContainer } from "react-toastify"
import { api } from "~/admin/AdminLayout"

const c = classNames.bind(styles)

function ProfilePage (){
    const {img} = useSelector(state => state.userData)
    const [avatar, setAvatar] = useState(null)
    const uid = localStorage.getItem('_id')

    useEffect(() => {
        setAvatar(img)
    }, [img])

    //doi avatar
    const handleChangeInputImg = (e) => {
        const img = e.target.files[0]

        if(img){
            const reader = new FileReader
            reader.onload = (e) => {
                setAvatar(e.target.result)
            }
            reader.readAsDataURL(img)
        }
    }

    //gui yeu cau doi avatar cho backend
    const handleSubmitForm = async(e) => {
        e.preventDefault()
        
        const formData = new FormData()
        formData.append('img', e.target.img.files[0])

        const toastLoadingId = toast.loading('đang thay đổi', {
            closeButton: true
        })

        try {
            const response = await fetch(`${api}user/put/avatar/${uid}`, {
                method: 'PUT',
                body: formData
            })

            const data = await response.json()
            toast.dismiss(toastLoadingId)

            if(response.ok){
                toast.success(data.message, {
                    closeButton: true
                })
            }else{
                toast.error(data.message, {
                    closeButton: true
                })
            }
        } catch (error) {
            toast.dismiss(toastLoadingId)
            toast.error(error.message, {
                closeButton: true
            })            
        }
    }

    return(
        <form onSubmit={handleSubmitForm} enctype="multipart/form-data">
            <ToastContainer autoClose={3000} position="top-right" />
            <div className={c('image')}>
                {avatar ? <img src={avatar} alt="" /> : <CiImageOn fontSize={100} fill="gray"/> }
            </div>
            <label htmlFor="img" className={c('imageBtn')}>
                Chọn Avatar để đổi
            </label>
            <button type="submit" className={c('imageBtn')}>
                Thay đổi
            </button>
            <input type="file" accept="image/*" name="img" id="img"style={{display: 'none'}} onChange={handleChangeInputImg}/>
        </form>
    )
}

export default ProfilePage
