import { Link } from 'react-router-dom'
import styles from './NotiLogin.module.scss'
import Button from 'src/components/Button'

function NotiLogin(){

    return (
        <div className={styles.wrap}>
            <p>Đăng nhập để khám phá playlist dành riêng cho bạn</p>
            <Link to={'/login'}>
                <Button children={'ĐĂNG NHẬP'} />
            </Link>
        </div>
    )
}

export default NotiLogin