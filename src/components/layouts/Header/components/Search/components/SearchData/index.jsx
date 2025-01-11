import classNames from "classnames/bind"
import styles from './SearchData.module.scss'
import { LoadingIcon } from "~/icon"

const c = classNames.bind(styles)

export const SearchData = ({data}) =>{

    return (
        <div className={c('container')}>
            {
                data === null ? 
                <LoadingIcon /> :
                <div>{data.name}</div>
            }
        </div>
    )
}