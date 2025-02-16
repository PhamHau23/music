import classNames from "classnames/bind"
import styles from "./Navigation.module.scss"
import { leftArrow, rightArrow } from "~/icon"
import { useNavigate } from "react-router-dom"

function Navigation(){

    const c = classNames.bind(styles)

    const navigate = useNavigate()

    const urlData = window.history.state
    const historyLength = window.history.length

    const handleClick = (page) => {
        navigate(page)
    }

    return(
        <div className={c('nav-wrap')}>
            <span onClick={() => handleClick(-1)} className={c({active: urlData && urlData.idx > 0})}>{leftArrow}</span>
            <span onClick={() => handleClick(1)} className={c({active: urlData && urlData.idx < historyLength - 1})}>{rightArrow}</span>
        </div>
    )
}

export default Navigation