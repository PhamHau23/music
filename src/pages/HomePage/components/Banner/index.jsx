import classNames from "classnames/bind"
import styles from "./Banner.module.scss"

const img = 'https://res.cloudinary.com/dtzqisgc8/image/upload/v1728973355/webMusic/z5931269727500_28c24b4c3b60750350935ecaab5763cc_nzks20.jpg'

function Banner(){

    
    const c = classNames.bind(styles)

    return(
        <div className={c('banner-wrap')}>
                <span>
                    <a href="/">
                        <img src={img} alt="" />
                    </a>
                </span>

                <span>
                    <a href="/">
                        <img src={img} alt="" />
                    </a>
                </span>

                <span>
                    <a href="/">
                        <img src={img} alt="" />
                    </a>
                </span>
        </div>
    )
}

export default Banner