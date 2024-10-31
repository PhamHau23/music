import classNames from "classnames/bind"
import styles from "./GenreList.module.scss"


function GenreList({children}){   
    const c = classNames.bind(styles)

    return(
        <div className={c('Category-list')}>
            {children}
        </div>
    )
}

export default GenreList