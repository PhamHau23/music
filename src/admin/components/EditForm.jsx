import { useEffect, useRef, useState } from "react"
import {api, c} from "../AdminLayout"

const nationArr = ['vn','eu','cn','kr']
function EditForm({setEditForm, editFormData}){
    const [img, setImg] = useState(editFormData.img)
    const [name, setName] = useState(editFormData.name)
    const [nation, setNation] = useState(editFormData.nation.id)
    const [genre, setGenre] = useState(editFormData.genre.id)
    const [genres, setGenres] = useState([])
    const inputImgRef = useRef(null)
    const formRef = useRef(null)


    //useEffect
    useEffect(() => {
        (async() => {
            const response = await fetch(`${api}genre/nation/id?id=${nation}`)
            const data = await response.json()
            setGenres(data)
        })()
    }, [nation])

    //close edit
    const handleClickCloseForm = () => {
        setEditForm(false)
    }

    //thay đổi ảnh
    const handleChangeImg = () => {
        const url = inputImgRef.current.files[0]
        if(url){
            const reader = new FileReader()
            reader.onload = (e) => {
                setImg(e.target.result)
            }
            reader.readAsDataURL(url)
        }
    }

    //thay đổi name
    const handleChangeInputName = (e) => {
        const value = e.target.value
        setName(value)
    }

    //thay đổi nation
    const handleChangeInputNation = (e) => {
        const value = e.target.value
        setNation(value)
    }

    //thay doi the loai
    const handleChangeGenre = (e) => {
        const value = e.target.value
        setGenre(value)
    }

    //submit form
    const handleSubmitForm = async(e) => {
        e.preventDefault()
        const formData = new FormData(formRef.current)
        try {
            // Giả sử editFormData chứa id của bài hát (ví dụ: editFormData.id)
            const response = await fetch(`${api}admin/put/song/${editFormData._id}`, {
                method: 'PUT',
                body: formData
            })
        
            if (!response.ok) {
              const errorData = await response.json()
              throw new Error(errorData.error || 'Lỗi khi cập nhật dữ liệu')
            }
        
            const result = await response.json()
            alert('Cập nhật thành công!')
            

            setEditForm(false)
            
            // Hoặc cập nhật lại dữ liệu hiển thị trên giao diện (nếu có callback từ props)
            // onUpdate(result.data);
            
          } catch (err) {
            alert(`Cập nhật thất bại: ${err.message}`)
          }
    }

    return(
        <div className={c('editBox')}>
            <form action="" ref={formRef} onSubmit={handleSubmitForm} enctype="multipart/form-data">
                <div className={c('div1')}>
                    <span onClick={handleClickCloseForm}>x</span>
                    <div className={c('div1-1')}>
                        <div className={c('img')}>
                            <img src={img} alt="" />
                            <label htmlFor="img">thay đổi ảnh</label>
                            <input type="file" 
                                style={{display: 'none'}} 
                                name="img" id="img" 
                                ref={inputImgRef}
                                onChange={handleChangeImg}    
                            />
                        </div>

                        <div>
                            <label htmlFor="name" >tên</label>
                            <input type="text" 
                                name="name" 
                                id="name" 
                                onChange={handleChangeInputName}
                                value={name}/>
                        </div>

                        <div>
                            <label htmlFor="nation" >khu vực</label>
                            <select name="nation" id="nation" onChange={handleChangeInputNation}>
                                <option value={nation}>{nation}</option>
                                {nationArr.map(item => (
                                    item !== nation && <option value={item}>{item}</option>
                                ))}
                            </select>
                        </div>

                        {
                            editFormData.genre &&
                            <div>
                                <label htmlFor="genres" >thể loại</label>
                                <select name="genres" id="genres" onChange={handleChangeGenre}>
                                    <option value={genre}>{genre}</option>
                                    {genres.map(item => (
                                        item.id !== genre && <option value={item.id}>{item.id}</option>
                                    ))}
                                </select>
                            </div>
                        }

                        {editFormData.singerName && 
                            <div style={{alignItems: 'unset'}}>
                                <label htmlFor="singer">tên ca sĩ</label>
                                <div className={c("flex","flex-col","singerList")}>
                                    {
                                        editFormData.singerName.map(name => (
                                            <input type="text" name="singer" id="singer" value={name}/>
                                        ))
                                    }
                                </div>
                            </div>
                        }
                    </div>
                    <button>
                        thay đổi
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditForm