import { Link, useLocation } from "react-router-dom"
import classNames from "classnames/bind"
import styles from "./NavItem.module.scss"

function NavItem({path, name, mainIcon, setItem, tabletTitle, classname}){

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
                <span className={c(classname)}>
                    {mainIcon}
                    <p className={c('title')}>{name}</p>
                    <p className={c('tabletTitle', 'tabletTitle1')}>{tabletTitle}</p>
                </span>
            </Link>
       </li>
    )
}

export default NavItem