import { useNavigate } from "react-router-dom"
import classNames from "classnames/bind"
import styles from "./Genre.module.scss"


function Genre({data}){
    const c = classNames.bind(styles)

    const navigate = useNavigate()

    const handleNavigateClick = (genreId) => {
        navigate(`/songs/${genreId}`)
    }

    return(
        <div className={c('category-item-wrap')}>
            {data.map((item, index) => (
                <div className={c('item')} key={index} onClick={() => handleNavigateClick(item.genreId)}>
                    <a>
                        <img src={item.img} alt="" />
                    </a>
                    <div className={c('title')}>
                        <p>{item.genreName}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Genre