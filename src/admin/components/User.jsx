import classNames from "classnames/bind"
import styles from "../Admin.module.scss"
import { SearchIcon2 } from "~/icon"
import { useEffect, useRef, useState } from "react"
import { removeTones } from "~/lib/removeTones"
import AdminListItem from "./AdminListItem"

export const c = classNames.bind(styles)

export default function User(){
    const inputRef = useRef()
    const selectRef = useRef()
    const [searchValue, setSearchValue] = useState([])
    const [userData, setUserData] = useState([])
    const [noData, setNoData] = useState(null)

    //fetch user
    useEffect(() => {
        (async() =>{
            const response = await fetch('http://localhost:3000/api/user/getUser')
            const data = await response.json()
            setUserData(data)
        })()
    }, [])


    //kiem tra da có dữ liệu hay chưa
    if(!userData || Object.keys(userData).length === 0){
        return <div>...loading</div>
    }

    // tim kiem
    const handleChangeInput = () => {
        const value = removeTones(inputRef.current.value.toLowerCase())
            if(value.length > 0){
                const dataSearch = userData.filter((item) =>
                    Object.values(item).some(objItem => removeTones(objItem.toString()).includes(value))
                )
                if(dataSearch.length === 0){
                    setNoData('không có dữ liệu')
                }else{
                    setSearchValue(dataSearch)
                    setNoData('')
                }
            }
    }

    //xóa user
    const handleDelete = async(id) => {
        confirm('ban co muon xoa')
        try {
            const response = await fetch(`http://localhost:3000/api/user/deleteUser/${id}`, {
                method: 'DELETE',
                headers: { "Content-Type": "application/json" }
            })
            const data = await response.json()
            if (response.ok) {
                setUserData(userData.filter(item => item._id !== id))
                console.log(data.message)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    //lọc theo role
    const handleChangeSelectRole = (e) => {
        const role = e.target.value
        if(Number(role) === 0){
            setSearchValue(userData)
        }else{
            const newData = userData.filter(user => user.role === role)
            if(newData.length === 0){
                setNoData('không có dữ liệu')
            }else{
                setSearchValue(newData)
                setNoData('')
            }
        }
    }

    const userRole = "user"
    return (
        <div className={c('user-container')}>
            <div className={c('fixed')}>
                <h1>Danh sách user</h1>
                <div className={c('flex','filterBox')}>
                    <div className={c('search')}>
                        <input type="text" ref={inputRef} onChange={handleChangeInput} placeholder="tìm kiếm"/>
                        <SearchIcon2 fontSize={30}/>
                    </div>
                    <div className={c('selectBox')}>
                        <label htmlFor="select">role</label>
                        <select name="select" id="" onChange={handleChangeSelectRole} ref={selectRef}>
                            <option value="0">không chọn</option>
                            <option value="admin">admin</option>
                            <option value={userRole}>user</option>
                        </select>
                    </div>
                </div>
            </div>
            <ul>
                {noData
                 ? (<li>{noData}</li>)
                 : (
                    (searchValue.length > 0 ? searchValue : userData).map(item => (
                        <AdminListItem 
                            key={item._id} 
                            img={item.img}
                            name={item.username}
                            id={item._id}
                            objId={item._id}
                            role={item.role}
                            handleDelete={handleDelete}
                        />
                    ))
                )}
            </ul>
        </div>
    )
}