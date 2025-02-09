import { Link, useLocation } from "react-router-dom"
import classNames from "classnames/bind"
import styles from "./NavItem.module.scss"

function NavItem({path, name, mainIcon, subIcon ,live, item, setItem}){

    const c = classNames.bind(styles)

    const location = useLocation()

    const handleClickItem = () => {
        setItem(name)
    }

    const linkStyle = () => {
        return location.pathname === path ? 'focus' : ''
    }
    
    return(
       <li onClick={() => handleClickItem(name)} className={c('navbar-item','tablet-navbar-item', linkStyle())}>
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