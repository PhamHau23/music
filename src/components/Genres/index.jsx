import classNames from "classnames/bind"
import styles from "./Genres.module.scss"
import Genre from "./components/Genre"


function Genres({title}){

    const c = classNames.bind(styles)

    return(
        <div className={c('Category-wrap')}>
            {title && <h1 className="title">{title}</h1>}
            <Genre />
        </div>
    )
}

export default Genres