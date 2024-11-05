import { useNavigate } from "react-router-dom"
import classNames from "classnames/bind"
import styles from "./Genre.module.scss"
import HoverSongAni from "src/components/HoverSongAni"


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
                    <a href={`/songs/${item.genreId}`}>
                        <img src={item.img} alt="" />
                        <HoverSongAni />
                    </a>
                    <div className={c('info')}>
                        <p>{item.genreName}</p>
                        <span className="a-style1">abc</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Genre