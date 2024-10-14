import { Link } from 'react-router-dom'
import styles from './NotiLogin.module.scss'

function NotiLogin(){

    return (
        <div className={styles.wrap}>
            <p>Đăng nhập để khám phá playlist dành riêng cho bạn</p>
            <Link to={'/login'}>
                <button className='button'>ĐĂNG NHẬP</button>
            </Link>
        </div>
    )
}

export default NotiLogin