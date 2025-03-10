import {api, c} from "../AdminLayout" 
import { useEffect, useRef, useState } from "react"
import AdminListItem from "./AdminListItem"
import { SearchIcon2 } from "~/icon"
import { toast, ToastContainer } from "react-toastify"
import { removeTones } from "~/lib/removeTones"
import useFetchAdminApi from "../hook/useFetchAdminApi"

export default function AdminSinger(){
    const [singerData, setSingerData] = useState([])
    const [searchValue, setSearchValue] = useState([])
    const [singerByNation, setSingerByNation] = useState([])
    const [noData, setNoData] = useState('')
    const selectRef = useRef(null)
    
    //fetch data
    const {apiData, isLoading} = useFetchAdminApi('singer')

    useEffect(() => {
        if(apiData && apiData.data){
            setSingerData(apiData.data)
        }
    }, [apiData])

    if(isLoading){
        return(
            <div>...loading</div>
        )
    }

    //search func
    const handleChangeSearchInput = (e) => {
        const value = removeTones(e.target.value.toLowerCase())
        if(value){
            const dataSearch = (selectRef.current.value === "0" ? singerData : searchValue).filter((item) =>
                removeTones(item.name).includes(value)
            )
            if(dataSearch.length === 0){
                setNoData('không có dữ liệu')
            }else{
                setSearchValue(dataSearch)
                setNoData('')
            }
        }else{
            setSearchValue(singerByNation)
        }
    }

    //select nation
    const handleChangeNation = (e) => {
        const selectValue = e.target.value
        if(Number(selectValue) === 0){
            setSearchValue(singerData)
            setSingerData(singerData)
            setNoData('')
        }else{
            const _singerByNation = singerData.filter((singer) => singer.nation === selectValue)
            if(_singerByNation.length === 0){
                setNoData('không có dữ liệu')
            }else{
                setSearchValue(_singerByNation)
                setSingerByNation(_singerByNation)
                setNoData('')
            }
        }
    }

    //delete
    const handleDeleteSinger = async(id) => {
        const isConfirmed = confirm('ban co muon xoa')
        
        if(isConfirmed){
            const toastLoadingId = toast.loading('đang xóa ca sĩ', {
                closeButton:  true
            })
            
            try {
                const response = await fetch(`${api}admin/deletesinger/${id}`, {
                    method: 'DELETE',
                    headers: { "Content-Type": "application/json" }
                })

                const data = await response.json()
                toast.dismiss(toastLoadingId)

                if (response.ok) {
                    setSingerData(singerData.filter(item => item._id !== id))
                    toast.success(data.message, {
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

    return(
        <div className={c('singer-container')}>
            <ToastContainer autoClose={2000} position="top-right"/>
            <div className={c('fixed')}>
                <h1>Danh sách bài hát</h1>
                <div className={c('flex', 'filterBox')}>
                    <div className={c('search')}>
                        <input type="text" onChange={handleChangeSearchInput} placeholder="tìm kiếm...."/>
                        <SearchIcon2 fontSize={30}/>
                    </div>

                    <div>
                        <label htmlFor="nation">choose nation</label>
                        <select name="nation" id="nation" ref={selectRef} onChange={handleChangeNation}>
                            <option value='0'>không chọn</option>
                            <option value="việt nam">việt nam</option>
                            <option value="âu mỹ">âu mỹ</option>
                            <option value="trung quốc">trung quốc</option>
                            <option value="hàn quốc">hàn quốc</option>
                        </select>
                    </div>
                </div>

            </div>
            <ul>
                {noData 
                 ? (<li>{noData}</li>) 
                 : (
                    ((searchValue.length > 0 ? searchValue : singerData).map(singer => (
                        <AdminListItem
                            key={singer._id}
                            name={singer.name}
                            id={singer._id}
                            img={singer.img}
                            nation={singer.nation}
                            view={singer.view}
                            handleDelete={() => handleDeleteSinger(singer._id)}
                        />
                        ))
                    ))
                }
            </ul>
        </div>
    )
}