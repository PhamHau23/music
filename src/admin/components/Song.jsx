import { SearchIcon2 } from "~/icon";
import { c } from "./User";
import { useState, useRef, useEffect } from "react";
import { removeTones } from "~/lib/removeTones";
import AdminListItem from "./AdminListItem";
import { capitalizeWords } from "~/lib/capitalizeWords";
import EditForm from "./EditForm";
import { api } from "../AdminLayout";
import { toast, ToastContainer } from "react-toastify";

export default function Song() {
   const [songData, setSongData] = useState([])
   const [searchValue, setSearchValue] = useState([])
   const [data, setData] = useState([])
   const [disableSelectBox, setDisableSelectBox] =  useState(true)
   const [nationValue, setNationValue] = useState(null)
   const [genreList, setGenreList] = useState([])
   const [noData, setNoData] = useState('')
   const [editFormData, setEditFormData] =  useState([])
   const [key, setKey] = useState(null)
   const [editForm, setEditForm] = useState(false)
   const [SongFiltered, setSongFiltered] = useState([])
   const inputRef = useRef(null)
   const selectNationRef = useRef(null)
   const selectGenreRef = useRef(null)
   const ulRef = useRef(null)
   const divSongContainerRef = useRef(null)

   //loc list the loai theo nation
   useEffect(() => {
      if(nationValue){
         const genreData = data.genres.filter(genre => genre.nation === nationValue)
         setGenreList(genreData)
      }
   }, [nationValue, setNationValue])

   useEffect(() => {
      (async() => {
         const response = await fetch(`${api}admin/song`)
         const data = await response.json()
         setData(data)
         setSongData(data.song)
      })()
   }, [])


   //kiem tra da co data hay chua
   if(!songData || Object.keys(songData).length === 0){
      return <div>...loading</div>
   }

   //search function
   const handleChangeInput = () => {
      const value = removeTones(inputRef.current.value.toLowerCase())
      if(value.length > 0){
         const dataSearch = (selectNationRef.current.value === '0' ? songData : searchValue).filter((item) =>
            Object.values(item).some(objItem => removeTones(objItem.toString()).includes(value))
         )
         if(dataSearch.length === 0){
            setNoData('không có dữ liệu')
         }else{
            setSearchValue(dataSearch)
            setNoData('')
         }
      }else{
         setSearchValue(SongFiltered)
      }
   }

   //delete song
   const handleDeleteSong = async(id) => {
      const isConfirmed = confirm('ban co muon xoa')
      
      if(isConfirmed){
         const toastLoadingId = toast.loading('đang xóa bài hát', {
            closeButton: true
         })

         try {
            const response = await fetch(`${api}admin/deletesong/${id}`, {
               method: 'DELETE',
               headers: { "Content-Type": "application/json" }
            })

            const data = await response.json()
            toast.dismiss(toastLoadingId)
            
            if (response.ok) {
               setSongData(songData.filter(item => item._id !== id))
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

   //edit song
   const handleEditSong = (id) => {
      if(id){
         const song = songData.find((song) => song._id === id)
         setEditFormData(song)
         setEditForm(!editForm)
         setKey(song._id)
      }
   }

   //change event nation
   const handleChangeNationOption = () => {
      const selectValue = selectNationRef.current.value
      if(Number(selectValue) === 0){
         setDisableSelectBox(true)
         setSearchValue(songData)
         setNoData('')
         selectGenreRef.current.value = '0'
      }else{
         const songByNation = songData.filter((song) => song.nation.id === selectValue)
         setDisableSelectBox(false)
         setNationValue(selectValue)
         if(songByNation.length === 0){
            setNoData('không có dữ liệu')
         }else{
            setSearchValue(songByNation)
            setSongFiltered(songByNation)
            setNoData('')
         }
      }
   }


   //change event genre
   const handleChangeGenreOption = () => {
      const genreId = selectGenreRef.current.value
      const _songByGenre = searchValue.filter(song => song.genre.id === genreId)
      if(Number(genreId) === 0){
         setSearchValue(searchValue)
         setNoData('')
      }else{
         if(_songByGenre.length === 0){
            setNoData('không có dữ liệu')
         }else{
            setSearchValue(_songByGenre)
            setSongFiltered(_songByGenre)
            setNoData('')
         }
      }
   }

   return (
      <div className={c("song-container")} ref={divSongContainerRef}>
         <ToastContainer autoClose={2000} position="top-right"/>
         <div className={c('fixed')}>
            <h1>Danh sách bài hát</h1>
            <div className={c('flex', 'filterBox')}>
               <div className={c('search')}>
                  <input type="text" ref={inputRef} onChange={handleChangeInput} placeholder="tìm kiếm...."/>
                  <SearchIcon2 fontSize={30}/>
               </div>

               <div className={c('selectBox')}>
                  <label htmlFor="nation">choose nation</label>
                  <select name="nation" id="" ref={selectNationRef} onChange={handleChangeNationOption}>
                     <option value='0'>không chọn</option>
                     <option value='vn'>việt nam</option>
                     <option value='eu'>âu mỹ</option>
                     <option value='cn'>trung quốc</option>
                     <option value='kr'>hàn quốc</option>
                  </select>
               </div>

               <div className={c('selectBox')}>
                  <label htmlFor="nation">choose genre</label>
                  <select name="nation" id="" ref={selectGenreRef} disabled = {disableSelectBox} onChange={handleChangeGenreOption}>
                     <option value='0'>không chọn</option>
                     {genreList.map((genre) => (
                        <option value={genre.id} key={genre.id}>{capitalizeWords(genre.name)}</option>
                     ))}
                  </select>
               </div>
            </div>
         </div>
         <ul ref={ulRef}>
            {noData 
            ? (<li>{noData}</li>)
            : (
               (searchValue.length > 0 ? searchValue : songData).map((item) => (
                  <AdminListItem 
                     key={item._id}
                     name={item.name}
                     singerName={item.singerName}
                     id={item._id}
                     objId={item._id}
                     img={item.img}
                     handleDelete={handleDeleteSong}
                     handleEdit={handleEditSong}
                  />
               ))
            )}
         </ul>

         {editForm && <EditForm key={key} setEditForm={setEditForm} nationArr={songData.nation} editFormData={editFormData}/>}
      </div>
   );
}
