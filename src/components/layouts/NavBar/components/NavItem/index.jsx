import { Link } from "react-router-dom"
import classNames from "classnames/bind"
import styles from "./NavItem.module.scss"
import { useState } from "react"

function NavItem({path, name, mainIcon, subIcon ,live, item, setItem}){

    const c = classNames.bind(styles)

    const handleClickItem = () => {
        setItem(name)
    }

    const linkStyle = (name) => {
        return item === name ? 'focus' : ''
    }
    
    return(
       <li onClick={() => handleClickItem(name)} className={c('navbar-item', linkStyle(name))}>
            <Link title={name} to={path}>
                <span className={c(`${ live ? live : ''}`)}>
                    {mainIcon}
                    <p>{name}</p>
                    <i>{subIcon}</i>
                </span>
            </Link>
       </li>
    )
}

export default NavItem