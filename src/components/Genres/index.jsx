import classNames from "classnames/bind"
import styles from "./Genres.module.scss"
import Genre from "./components/Genre"


function Genres({title, data}){

    const c = classNames.bind(styles)

    return(
        <div className={c('Category-wrap')}>
            <h1>{title}</h1>
            <Genre data={data}/>
        </div>
    )
}

export default Genres