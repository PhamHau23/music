import classNames from "classnames/bind"
import styles from "./Button.module.scss"

const c = classNames.bind(styles)

function Button({children, onClick, click, icon, style}){

    return (
        <button 
        onClick={onClick}
        className={c(`button ${ click === children ? 'active' : '' }`, style && style)}>
            {icon && icon}{children}
        </button>
    )
}

export default Button