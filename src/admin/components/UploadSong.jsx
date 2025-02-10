import { useState ,useEffect, useRef } from "react"
import {api, c} from "../AdminLayout"
import { removeTones } from "~/lib/removeTones"
import { CiImageOn } from "react-icons/ci"
import EditForm from "./EditForm"

function UploadSong(){
    const [data, setData] = useState([])
    const [singer, setSinger] = useState([])
    const [singerValue, setSingerValue] = useState('')
    const [nation, setNation] = useState(null)
    const [img, setImg] = useState(null)
    const searchInputRef = useRef(null)
    const inputImgRef = useRef(null)


    //fetch dữ liệu
    useEffect(() => {
        (async() => {
            const response = await fetch(`${api}admin/uploadsongpage?nation=${nation}`)
            const data1 = await response.json()
            setData(data1)
        })()
    },[nation])

    //kiểm có dữ liệu chưa
    if(!data || Object.keys(data).length === 0){
        return(
            <div>...loading</div>
        )
    }

    //lọc theo quốc gia
    const handleChangeNation = (e) => {
        const value = e.target.value
        setNation(value)
    }

    //tìm kiếm ca sĩ
    const handleChangeSearchSinger = (e) => {
        const value = removeTones(e.target.value.toLowerCase())
        if(value.length > 0){
            const dataSearch = data.singer.filter((item) =>
                removeTones(item.name).includes(value)
            )
            setSinger(dataSearch)
        }else{
            setSinger([])
        }
    }

    //set ca sĩ
    const handleSingerClick = (singerInfo) => {
        setSingerValue((prev) => [...prev, singerInfo.name])
    }

    //xoa ten ca si khoi list tim kiem
    const handleDeleteSinger = (name) => {
        const newArr = singerValue.filter((name1) => name1 !== name)
        setSingerValue(newArr)
    }

    //upload anh
    const handleChangeInputImg = () => {
        const img1 = inputImgRef.current.files[0]
        if(img1){
            const reader = new FileReader
            reader.onload = (e) => {
                setImg(e.target.result)
            }
            reader.readAsDataURL(img1)
        }
    }

    //upload song
    const handleSubmitForm = async(e) => {
        e.preventDefault()
        
        const formData = new FormData()

        formData.append('name', e.target.songName.value),
        formData.append('img', e.target.img.files[0]),
        formData.append('mp3', e.target.mp3.files[0]),
        formData.append('singer', JSON.stringify(singerValue)),
        formData.append('nation', e.target.nation.value),
        formData.append('genre', e.target.genre.value)  

        try {
            const response =  await fetch(`${api}admin/post/song`,{
                method: 'POST',
                body: formData
            })
            const data = await response.json()
            if(response.ok){
                console.log(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className={c('uploadContainer')}>
            <h1>Thêm bài hát</h1>
            <form action="" method="post" onSubmit={handleSubmitForm} enctype="multipart/form-data">
                <div>
                    <label htmlFor="songName">Tên bài hát</label>
                    <input type="text" name="songName" id="songName" placeholder="nhập tên bài hát..."/>
                </div>

                <div className={c('imageBox')}>
                    <label htmlFor="img">ảnh</label>
                    <label htmlFor="img" className={c('image')} name="thêm ảnh" title="thêm ảnh">
                        {img ? <img src={img} alt="" /> : <CiImageOn fontSize={100} fill="gray"/> }
                    </label>
                    <input type="file" name="img" id="img" ref={inputImgRef} onChange={handleChangeInputImg}/>
                </div>

                <div>
                    <label htmlFor="mp3">mp3 file</label>
                    <input type="file" name="mp3" id="mp3"/>
                </div>
                <div>
                    <label htmlFor="singer">tìm ca sĩ</label>
                    <div className={c('uploadSearchInput')}>
                        <input type="text" name="singer" onChange={handleChangeSearchSinger} ref={searchInputRef} placeholder="tìm kiếm..."/>
                        <ul>
                            {singer.length === 0
                                ? <li>không có dữ liệu</li> 
                                : singer.map(singer => <li onClick={() => handleSingerClick(singer)}>{singer.name}</li>)}
                        </ul>
                    </div>
                </div>

                <div className={c('singerNameSelect-box')}>
                    <label htmlFor="">danh sách ca sĩ</label>
                    <ul className={c('singerNameSelect')}>
                        {singerValue 
                        && singerValue.map((name) => 
                            <li>
                                <p>{name}</p>
                                <span className={c('deleteIcon')} onClick={() => handleDeleteSinger(name)}> x </span>
                            </li>
                        )}
                    </ul>
                </div>

                <div>
                    <label htmlFor="nation">quốc gia & khu vực</label>
                    <select name="nation" id="nation" onChange={handleChangeNation}>
                        <option value="0">không chọn</option>
                        {
                            data.nation.map(nation => (
                                <option value={nation.id}>{nation.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="genre">thể loại</label>
                    <select name="genre" id="genre">
                        {nation && data.genres.map(genre => (
                            <option value={genre.id}>{genre.name}</option>
                        ))}
                    </select>
                </div>

                <button type="submit">
                    upload
                </button>
            </form>
        </div>
    )
}

export default UploadSong