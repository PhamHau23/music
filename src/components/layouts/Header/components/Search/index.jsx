import classNames from "classnames/bind"
import { useRef, useState, useEffect } from "react"
import styles from './Search.module.scss'
import { searchIcon } from "src/icon"
import { SearchData } from "./components/SearchData"
import { useSelector } from "react-redux"

function Search(){

    const c = classNames.bind(styles)
    const [searchValue, setSearchValue] = useState(null)
    const [isDropDownVisible, setIsDropdownVisible] = useState(false)
    const {songsList} = useSelector(state => state.songsData)
    const searchRef = useRef(null)

    const handleInput = (e) => {
        const value = e.target.value
        setSearchValue(e.target.value)        

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
            <input type="search" placeholder='Tìm kiếm bài hát, nghệ sĩ...' onChange={handleInput}/>
            {isDropDownVisible && <SearchData data={searchValue}/>}
        </div>
    )
}


export default Search