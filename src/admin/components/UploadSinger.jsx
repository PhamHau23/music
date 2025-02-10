import { CiImageOn } from "react-icons/ci"
import {api, c} from "../AdminLayout"
import { useRef, useState } from "react"


function UploadSinger(){
    const [img, setImg] = useState(null)
    const inputImgRef = useRef(null)

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

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        const formData =  new FormData()
        await Promise.all([
            formData.append('name',e.target.name.value),
            formData.append('img', e.target.img.files[0]),
            formData.append('date',e.target.date.value),
            formData.append('nation',e.target.nation.value),
            formData.append('address',e.target.address.value)
        ])
        
        try {
            const response =  await fetch(`${api}admin/post/singer`,{
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
            <form method="post" onSubmit={handleSubmitForm} enctype="multipart/form-data">
                <div>
                    <label htmlFor="name">tên ca sĩ</label>
                    <input type="text" id="name" name="name" placeholder="nhập tên ca sĩ" title="tên ca sĩ"/>
                </div>

                <div className={c('imageBox')}>
                    <label htmlFor="">ảnh</label>
                    <label htmlFor="img" className={c('image')} name="thêm ảnh" title="thêm ảnh">
                        {img ? <img src={img} alt="" /> : <CiImageOn fontSize={100} fill="gray"/> }
                    </label>
                    <input type="file" id="img" ref={inputImgRef} name="img" onChange={handleChangeInputImg}/>
                </div>

                <div>
                    <label htmlFor="address">quê quán</label>
                    <input type="text" name="address" />
                </div>

                <div>
                    <label htmlFor="date">ngày sinh/ ngày thành lập</label>
                    <input type="date" name="date"/>
                </div>

                <div>
                    <label htmlFor="nation">quốc gia && khu vực</label>
                    <select name="nation" id="">
                        <option value="vn">việt nam</option>
                        <option value="cn">trung quốc</option>
                        <option value="kr">hàn quốc</option>
                        <option value="eu">âu mỹ</option>
                    </select>
                </div>

                <button >thêm ca sĩ</button>
            </form>
        </div>
    )
}

export default UploadSinger