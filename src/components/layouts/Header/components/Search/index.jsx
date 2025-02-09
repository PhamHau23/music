import classNames from "classnames/bind"
import { useRef, useState, useEffect } from "react"
import styles from './Search.module.scss'
import { searchIcon } from "src/icon"
import { SearchData } from "./components/SearchData"
import { useSelector } from "react-redux"
import { removeTones } from "~/lib/removeTones"

function Search(){

    const c = classNames.bind(styles)
    const inputRef = useRef(null)
    const [searchValue, setSearchValue] = useState(null)
    const [isDropDownVisible, setIsDropdownVisible] = useState(false)
    const {songsList} = useSelector(state => state.songsData)
    const searchRef = useRef(null)

    const handleInput = () => {
        const value = removeTones(inputRef.current.value.toLowerCase())
        let dataSearch
        if(value.length > 0){
            dataSearch = songsList.filter((item) =>
                Object.values(item).some(objItem => removeTones(objItem.toString()).includes(value))
            )
        }
        setSearchValue(dataSearch)

        if(value.trim() !== " "){
            setIsDropdownVisible(true);
        }else{
            setIsDropdownVisible(false);
        }
    }
    
    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
          setIsDropdownVisible(false)
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={c('search-wrap')} ref={searchRef}>
            <i>{searchIcon}</i>
            <input ref={inputRef} type="search" placeholder='Tìm bài hát, ca sĩ...' onChange={handleInput}/>
            {isDropDownVisible && <SearchData data={searchValue}/>}
        </div>
    )
}


export default Search