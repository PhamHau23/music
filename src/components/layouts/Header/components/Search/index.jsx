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
    const searchRef = useRef(null)
      
    const { data: songs, isLoading } = useQuery({
        queryKey: ["songs", query],
        queryFn: () => fetchSearchApi(`song/search/searchvalue?query=${query}`),
        enabled: !!query
    })

    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
          isLoading
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
    
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const handleChangeInput = (e) => {
        setQuery(e.target.value)
    }

    console.log(songs)

    return (
        <div className={c('search-wrap')} ref={searchRef}>
            <i>{searchIcon}</i>
            <input ref={inputRef} type="search" placeholder='Tìm bài hát, ca sĩ...' onChange={handleChangeInput}/>
            {<SearchData data={songs} idLoading={isLoading}/>}
        </div>
    )
}


export default Search