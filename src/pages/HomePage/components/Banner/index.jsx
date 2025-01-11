import classNames from "classnames/bind"
import styles from "./Banner.module.scss"

function Banner(){

    
    const c = classNames.bind(styles)

    return(
        <div className={c('banner-wrap')}>
                <span>
                    <a href="/">
                        <img src='https://res.cloudinary.com/dtzqisgc8/image/upload/v1731137242/webMusic/quocGia/90c615657364a570232d7f6e86ffa6da_ljmw8q.jpg' alt="" />
                    </a>
                </span>

                <span>
                    <a href="/">
                        <img src='https://res.cloudinary.com/dtzqisgc8/image/upload/v1731137242/webMusic/quocGia/90c615657364a570232d7f6e86ffa6da_ljmw8q.jpg' alt="" />
                    </a>
                </span>

                <span>
                    <a href="/">
                        <img src='https://res.cloudinary.com/dtzqisgc8/image/upload/v1731137242/webMusic/quocGia/90c615657364a570232d7f6e86ffa6da_ljmw8q.jpg' alt="" />
                    </a>
                </span>
        </div>
    )
}

export default Banner