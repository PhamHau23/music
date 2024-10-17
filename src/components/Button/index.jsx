import { useState } from "react"
import styles from "./Button.module.scss"

function Button({children, onClick, click}){

    return (
        <button 
        onClick={onClick}
        className={`button ${ click === children ? 'active' : '' }`}>{children}</button>
    )
}

export default Button