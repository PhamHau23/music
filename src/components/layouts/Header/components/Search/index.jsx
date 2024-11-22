import classNames from "classnames/bind"
import styles from './Search.module.scss'
import { searchIcon } from "src/icon"

function Search(){

    const c = classNames.bind(styles)

    return (
        <div className={c('search-wrap')}>
            <i>{searchIcon}</i>
            <input type="search" placeholder='Tìm kiếm bài hát, nghệ sĩ...'/>
        </div>
    )
}

export default Search