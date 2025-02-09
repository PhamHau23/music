import { SearchIcon2 } from "~/icon";
import { c } from "./User";
import { useState, useRef, useEffect } from "react";
import { removeTones } from "~/lib/removeTones";
import AdminListItem from "./AdminListItem";
import useFetchApi from "~/hooks/useFetchApi";
import { capitalizeWords } from "~/lib/capitalizeWords";
import EditForm from "./EditForm";

export default function Song() {
   const songData = useFetchApi('admin/song')
   const [searchValue, setSearchValue] = useState([])
   const [disableSelectBox, setDisableSelectBox] =  useState(true)
   const [nationValue, setNationValue] = useState(null)
   const [genreList, setGenreList] = useState([])
   const [noData, setNoData] = useState('')
   const [editFormData, setEditFormData] =  useState([])
   const [key, setKey] = useState(null)
   const [editForm, setEditForm] = useState(false)
   const inputRef = useRef(null)
   const selectNationRef = useRef(null)
   const selectGenreRef = useRef(null)
   const ulRef = useRef(null)
   const divSongContainerRef = useRef(null)

   //loc list the loai theo nation
   useEffect(() => {
      if(nationValue){
         const genreData = songData.genres.filter(genre => genre.nation === nationValue)
         setGenreList(genreData)
      }
   }, [nationValue, setNationValue])


   //kiem tra da co data hay chua
   if(!songData || Object.keys(songData).length === 0){
      return <div>...loading</div>
   }

   //search function
   const handleChangeInput = () => {
      const value = removeTones(inputRef.current.value.toLowerCase())
      if(value.length > 0){
         const dataSearch = songData.song.filter((item) =>
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

   //delete song
   const handleDeleteSong = async(id) => {
      confirm('ban co muon xoa')
      try {
          const response = await fetch(`http://localhost:3000/api/admin/deletesong/${id}`, {
              method: 'DELETE',
              headers: { "Content-Type": "application/json" }
          })
          const data = await response.json()
          if (response.ok) {
              setSearchValue(songData.song.filter(item => item._id !== id))
              console.log(data.message)
          }
      } catch (error) {
          console.log(error.message)
      }
   }

   //edit song
   const handleEditSong = (id) => {
      if(id){
         const song = songData.song.find((song) => song._id === id)
         setEditFormData(song)
         setEditForm(!editForm)
         setKey(song._id)
      }
   }

   //change event nation
   const handleChangeNationOption = () => {
      const selectValue = selectNationRef.current.value
      const songByNation = songData.song.filter((song) => song.nation.id === selectValue)
      if(Number(selectValue) === 0){
         setDisableSelectBox(true)
         setSearchValue(songData)
         setNoData('')
         selectGenreRef.current.value = '0'
      }else{
         setDisableSelectBox(false)
         setNationValue(selectValue)
         if(songByNation.length === 0){
            setNoData('không có dữ liệu')
         }else{
            setSearchValue(songByNation)
            setNoData('')
         }
      }
   }


   //change event genre
   const handleChangeGenreOption = () => {
      const genreId = selectGenreRef.current.value
      const songByGenre = searchValue.filter(song => song.genre.id === genreId)
      if(Number(genreId) === 0){
         setSearchValue(searchValue)
         setNoData('')
      }else{
         if(songByGenre.length === 0){
            setNoData('không có dữ liệu')
         }else{
            setSearchValue(songByGenre)
            setNoData('')
         }
      }
   }

   return (
      <div className={c("song-container")} ref={divSongContainerRef}>
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
                     {songData.nation.map((nation) => (
                        <option value={nation.id} key={nation.id}>{capitalizeWords(nation.name)}</option>
                     ))}
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
               (searchValue.length > 0 ? searchValue : songData.song).map((item) => (
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
