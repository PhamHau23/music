import useFetchApi from "~/hooks/useFetchApi"
import {c} from "../AdminLayout" 
import { useEffect, useState } from "react"
import AdminListItem from "./AdminListItem"
import { SearchIcon2 } from "~/icon"

export default function AdminSinger(){
    const [singerData, setSingerData] = useState([])
    const [nation, setNation] = useState(null)

    useEffect(() => {
        (async() => {
            const response = await fetch(`http://localhost:3000/api/singer?nation=${nation}`)
            const data = await response.json()
            setSingerData(data)
        })()
    }, [nation])

    if(!singerData || Object.keys(singerData) === 0){
        return(
            <div>...loading</div>
        )
    }

    const handleChangeNation = (e) => {
        const value = e.target.value
        setNation(value)
    }

    const handleDeleteSinger = async(id) => {
        confirm('ban co muon xoa')
        try {
            const response = await fetch(`http://localhost:3000/api/admin/deletesinger/${id}`, {
                method: 'DELETE',
                headers: { "Content-Type": "application/json" }
            })
            const data = await response.json()
            if (response.ok) {
                setSingerData(singerData.filter(item => item._id !== id))
                console.log(data.message)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return(
        <div className={c('singer-container')}>
            <div className={c('fixed')}>
                <h1>Danh sách bài hát</h1>
                <div className={c('flex', 'filterBox')}>
                    <div className={c('search')}>
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
                {singerData && singerData.map(singer => (
                    <AdminListItem
                        key={singer._id}
                        name={singer.name}
                        id={singer._id}
                        img={singer.img}
                        nation={singer.nation}
                        view={singer.view}
                        handleDelete={() => handleDeleteSinger(singer._id)}
                    />
                ))}
            </ul>
        </div>
    )
}