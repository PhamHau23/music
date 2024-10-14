import classNames from "classnames/bind"
import styles from './Header.module.scss'


function Header(){
    const c = classNames.bind(styles)
    
    return (
        <header className={c('wrap')}>

        </header>
    )
}

export default Header