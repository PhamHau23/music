import classNames from "classnames/bind"
import styles from "./Navigation.module.scss"
import { leftArrow, rightArrow } from "~/icon"

function Navigation(){

    const c = classNames.bind(styles)

    return(
        <div className={c('nav-wrap')}>
            <span>{leftArrow}</span>
            <span>{rightArrow}</span>
        </div>
    )
}

export default Navigation