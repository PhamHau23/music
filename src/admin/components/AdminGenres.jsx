import AdminListItem from "./AdminListItem";
import {api, c} from "../AdminLayout"
import { useEffect, useRef, useState } from "react";
import {SearchIcon2} from "~/icon";
import { removeTones } from "~/lib/removeTones";
import { toast, ToastContainer } from 'react-toastify';



export default function AdminGenres(){
    const [data, setData] = useState([])
    const [searchValue, setSearchValue] = useState([])
    const [genreByNation, setGenreByNation] = useState([])
    const [noData, setNoData] = useState('')
    const inputRef = useRef()
    const selectRef = useRef()

    //fetch data
    useEffect(() => {
        (async() => {
            const response = await fetch(`${api}admin/genres`)
            const data = await response.json()
            setData(data)
        })()
    }, [])

    //kiem tra da co data hay chua
    if(!data || Object.keys(data).length === 0){
        return <div>...loading</div>
    }

    //tim kiem
    const handleChangeInput = () => {
        const value = removeTones(inputRef.current.value.toLowerCase())
        if(value.length > 0){
            const dataSearch = (selectRef.current.value === "0" ? data : searchValue ).filter((item) =>
                removeTones(item.name).includes(value)
            )
            if(dataSearch.length === 0){
                setNoData('không có dữ liệu')
            }else{
                setSearchValue(dataSearch)
                setNoData('')
            }
        }else{
            setSearchValue(genreByNation)
        }
    }

    //filter select nation
    const handleChangeSelectNation = () => {
        const selectValue = selectRef.current.value
        if(Number(selectValue) === 0){
            setSearchValue(data)
            setNoData('')
        }else{
            const dataFilter = data.filter((item) => item.nation === selectValue)
            if(dataFilter.length === 0){
                setNoData('không có dữ liệu')
            }else{
                setSearchValue(dataFilter)
                setGenreByNation(dataFilter)
                setNoData('')
            }
        }
    }

    //xoa the loai
    const handleDeleteGenre = async(id) => {
        const isConfirmed = confirm('ban co muon xoa')
        if(isConfirmed){
            const toastLoadingId = toast.loading('đang xóa thể loại',{
                closeButton: true
            })

            try {
                const response = await fetch(`${api}admin/deletegenre/${id}`, {
                    method: 'DELETE',
                    headers: { "Content-Type": "application/json" }
                })

                const newData = await response.json()
                toast.dismiss(toastLoadingId)
                
                if (response.ok) {
                    setData(data.filter(item => item._id !== id))
                    toast.success(newData.message,{
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
    }

    return (
        <div className={c('song-container')}>
            <ToastContainer position="top-right" autoClose={2000} />
            <div className={c('fixed')}>
                <h1>Danh sách bài hát</h1>
                <div className={c('flex', 'filterBox')}>
                    <div className={c('search')}>
                        <input type="text" ref={inputRef} onChange={handleChangeInput} placeholder="tìm kiếm...."/>
                        <SearchIcon2 fontSize={30}/>
                    </div>
                    <div className={c('selectBox')}>
                        <label htmlFor="nations">choose nation</label>
                        <select name="nations" onChange={handleChangeSelectNation} ref={selectRef}>
                            <option value='0'>không chọn</option>
                            <option value='vn'>việt nam</option>
                            <option value='eu'>âu mỹ</option>
                            <option value='cn'>trung quốc</option>
                            <option value='kr'>hàn quốc</option>
                        </select>
                    </div>
                </div>
            </div>
            <ul>
                {
                   noData
                   ? (<li>{noData}</li>)
                   :  (
                        (searchValue.length > 0 ? searchValue : data).map(item => {
                            return <AdminListItem 
                                    key={item._id}
                                    name={item.name}
                                    img={item.img}
                                    id={item.id}
                                    objId={item._id}
                                    nation={item.nationId.name}
                                    handleDelete={handleDeleteGenre}
                                    />
                            })
                   )
                }
            </ul>
        </div>
    )
}
