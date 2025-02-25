import classNames from "classnames/bind"
import { useRef, useState, useEffect } from "react"
import styles from './Search.module.scss'
import { searchIcon } from "~/icon"
import { SearchData } from "./components/SearchData"
import { useQuery } from "@tanstack/react-query"
import fetchSearchApi from "~/api/fetchSearchApi"

function Search(){
    const c = classNames.bind(styles)
    const inputRef = useRef(null)
    const [query, setQuery] = useState("");
    const [isDropdownVisible, setDropdownVisible] = useState(false)
    const searchRef = useRef(null)
      
    const { data: songs, isLoading } = useQuery({
        queryKey: ["songs", query],
        queryFn: () => fetchSearchApi(`song/search/searchvalue?query=${query}`),
        enabled: !!query
    })

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                searchRef.current &&
                !searchRef.current.contains(e.target)
            ) {
                setDropdownVisible(false);
            }
        }
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [])

    const handleChangeInput = (e) => {
        const value = e.target.value
        setQuery(value)
        if(value.length > 0){
            setDropdownVisible(true)
        }
    }

    return (
        <div className={c('search-wrap')} ref={searchRef}>
            <i>{searchIcon}</i>
            <input ref={inputRef} type="search" placeholder='Tìm bài hát, ca sĩ...' onChange={handleChangeInput}/>
            {isDropdownVisible &&
                <SearchData data={songs} idLoading={isLoading} setDropdownVisible={setDropdownVisible}/>
            }
        </div>
    )
}


export default Search