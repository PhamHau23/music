import classNames from 'classnames/bind'
import styles from './Setting.module.scss'
import { settingIcon } from '~/icon'

function Setting(){

    const c = classNames.bind(styles)

    return(
        <div className={c('setting-wrap')}>
            <i>{settingIcon}</i>
        </div>
    )
}

export default Setting