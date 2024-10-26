import classNames from "classnames/bind"
import styles from "./CarouselContainer.module.scss"
import { angleLeft, angleRight } from "~/icon"

function CarouselContainer({title, children}){

    const c = classNames.bind(styles)

    return(
        <div className={c('carousel-wrap')}>
            <h1>{title}</h1>
            {children}
            <span className={c('arrow-left')}>{angleLeft}</span>
            <span className={c('arrow-right','active')}>{angleRight}</span>
        </div>
    )
}

export default CarouselContainer