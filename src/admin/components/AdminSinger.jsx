import {api, c} from "../AdminLayout" 
import { useEffect, useState } from "react"
import AdminListItem from "./AdminListItem"
import { SearchIcon2 } from "~/icon"
import { toast, ToastContainer } from "react-toastify"
import { removeTones } from "~/lib/removeTones"

export default function AdminSinger(){
    const [singerData, setSingerData] = useState([])
    const [searchValue, setSearchValue] = useState([])
    const [nation, setNation] = useState(null)
    const [noData, setNoData] = useState('')

    useEffect(() => {
        (async() => {
            const response = await fetch(`${api}singer?nation=${nation}`)
            const data = await response.json()
            setSingerData(data)
        })()
    }, [nation])

    if(!singerData || Object.keys(singerData) === 0){
        return(
            <div>...loading</div>
        )
    }

    const handleChangeSearchInput = (e) => {
        const value = removeTones(e.target.value.toLowerCase())
        if(value.length > 0){
            const dataSearch = singerData.filter((item) =>
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

    const handleChangeNation = (e) => {
        const value = e.target.value
        setNation(value)
    }

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
                    <div className={c('search')} onChange={handleChangeSearchInput}>
                        <input type="text" placeholder="tìm kiếm...."/>
                        <SearchIcon2 fontSize={30}/>
                    </div>

                    <div>
                        <label htmlFor="nation">choose nation</label>
                        <select name="nation" id="nation" onChange={handleChangeNation}>
                            <option>không chọn</option>
                            <option value="vn">việt nam</option>
                            <option value="eu">âu mỹ</option>
                            <option value="cn">trung quốc</option>
                            <option value="kr">hàn quốc</option>
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