import { useRef, useState } from "react"
import {c} from "../AdminLayout"
import { CiImageOn } from "react-icons/ci"

function UploadGenre(){
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

    const handleSubmitForm = async(e) => {
        e.preventDefault()
        const formData = new FormData()
        await Promise.all([
            formData.append('name',e.target.name.value),
            formData.append('id', e.target.id.value),
            formData.append('img',e.target.img.files[0]),
            formData.append('nation', e.target.nation.value)
        ])

        console.log(formData)

        try {
            const response =  await fetch('http://localhost:3000/api/admin/post/genre',{
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
            <form action="" method="post" onSubmit={handleSubmitForm} enctype="multipart/form-data">
                <div>
                    <label htmlFor="name">tên thể loại</label>
                    <input type="text" title="tên thể loại" id="name" placeholder="nhập tên thể loại..."/>
                </div>

                <div>
                    <label htmlFor="id">id</label>
                    <input type="text" title="tên thể loại" id="id" placeholder="nhập id..."/>
                </div>

                <div className={c('imageBox')}>
                    <label htmlFor="img">ảnh</label>
                    <label htmlFor="img" className={c('image')} name="thêm ảnh" title="thêm ảnh">
                        {img ? <img src={img} alt="" /> : <CiImageOn fontSize={100} fill="gray"/> }
                    </label>
                    <input type="file" id="img" name="img" ref={inputImgRef} onChange={handleChangeInputImg}/>
                </div>

                <div>
                    <label htmlFor="nation">quốc gia && khu vực</label>
                    <select name="nation" id="nation">
                        <option value="vn">việt nam</option>
                        <option value="cn">trung quốc</option>
                        <option value="kr">hàn quốc</option>
                        <option value="eu">âu mỹ</option>
                    </select>
                </div>

                <button type="submit">thêm thể loại</button>
            </form>
        </div>
    )
}

export default UploadGenre