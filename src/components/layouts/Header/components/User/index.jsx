import classNames from "classnames/bind"
import styles from "./User.module.scss"
import { userIcon } from "~/icon"

function User(){

    const c = classNames.bind(styles)

    return(
        <div className={c('user-wrap')}>
            <span>{userIcon}</span>
        </div>
    )
}

export default User