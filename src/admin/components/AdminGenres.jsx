import AdminListItem from "./AdminListItem";
import {c} from "../AdminLayout"
import { useRef, useState } from "react";
import useFetchApi from "~/hooks/useFetchApi";
import { SearchIcon2 } from "~/icon";
import { removeTones } from "~/lib/removeTones";
import { capitalizeWords } from "~/lib/capitalizeWords";

export default function AdminGenres(){
    const [searchValue, setSearchValue] = useState([])
    const [noData, setNoData] = useState('')
    const inputRef = useRef()
    const selectRef = useRef()
    const data = useFetchApi('admin/genres')

    //kiem tra da co data hay chua
    if(!data || Object.keys(data).length === 0){
        return <div>...loading</div>
    }

    //tim kiem
    const handleChangeInput = () => {
        const value = removeTones(inputRef.current.value.toLowerCase())
        if(value.length > 0){
            const dataSearch = (selectRef.current.value === "all" ? data.genres : searchValue ).filter((item) =>
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

    //filter select nation
    const handleChangeSelectNation = () => {
        const nationId = selectRef.current.value
        console.log(nationId)
        console.log(nationId === "all")
        if(nationId){
            const dataFilter = data.genres.filter((item) => 
                item.nation === nationId
            )
            if(dataFilter.length === 0){
                setNoData('không có dữ liệu')
            }else{
                setSearchValue(dataFilter)
                setNoData('')
            }
        }
    }

    //xoa the loai
    const handleDeleteGenre = async(id) => {
        confirm('ban co muon xoa')
        try {
            const response = await fetch(`http://localhost:3000/api/admin/deletegenre/${id}`, {
                method: 'DELETE',
                headers: { "Content-Type": "application/json" }
            })
            const newData = await response.json()
            if (response.ok) {
                setSearchValue(data.genres.filter(item => item._id !== id))
                console.log(newData.message)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className={c('song-container')}>
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
                            <option value='all'>không chọn</option>
                            {data.nation.map(item => (
                                <option value={item.id} key={item.id} >{capitalizeWords(item.name)}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <ul>
                {
                   noData
                   ? (<li>{noData}</li>)
                   :  (
                        (searchValue.length > 0 ? searchValue : data.genres).map(item => {
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
