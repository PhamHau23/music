import { useState } from "react"
import styles from "./Button.module.scss"

function Button({children, click, setClick}){

    const handleClick = () => {
        setClick(children)
    }

    return (
        <button 
        onClick={handleClick}
        className={`button ${click === children ? 'active' : ''}`}>{children}</button>
    )
}

export default Button