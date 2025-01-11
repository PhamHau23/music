import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import classNames from "classnames/bind"
import styles from "./Genre.module.scss"
import HoverSongAni from "src/components/HoverSongAni"
import { GetApiDataContext } from "~/contexts"


function Genre(){
    const c = classNames.bind(styles)

    const navigate = useNavigate()
    const {value} = useContext(GetApiDataContext)

    const handleNavigateClick = (genreId) => {
        navigate(`/songs/${genreId}`)
    }

    return(
        <div className={c('category-item-wrap')}>
            {value.map((item) => (
                <div className={c('item')} key={item._id} onClick={() => handleNavigateClick(item._id)}>
                    <p className={c('img')}>
                        <img src={item.img} alt="" />
                        <HoverSongAni />
                    </p>
                    <div className={c('info')}>
                        <p>{item.name}</p>
                        <span className="a-style1"></span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Genre