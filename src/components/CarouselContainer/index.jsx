import classNames from "classnames/bind"
import styles from "./CarouselContainer.module.scss"
import React, { useState } from "react"
import { angleLeft, angleRight } from "~/icon"

function CarouselContainer({children}){

    const c = classNames.bind(styles)
    const [index, setIndex] = useState(0);
    const totalItems = React.Children.count(children);

    console.log(index)

    const nextSlide = () => setIndex((prev) => (prev + 1) % totalItems);
    const prevSlide = () => setIndex((prev) => (prev - 1 + totalItems) % totalItems);

    return(
        <div className={c('carousel-wrap')}>
            <div className={c('carouselContent')}>
                <div className={c('flex','col-gap-18','carouselTrack')} 
                    style={{
                            transform: `translateX(-${index * (33.8)}%)`,
                           }}>
                    {children}
                </div>
            </div>
            <button className={c('arrow-left', index === 0 || 'active')} onClick={prevSlide} disabled = {index === 0}>{angleLeft}</button>
            <button className={c('arrow-right', index === totalItems - 3 || 'active')} onClick={nextSlide} disabled = {index === totalItems - 3} >{angleRight}</button>
        </div>
    )
}

export default CarouselContainer

/**/