import classNames from "classnames/bind"
import styles from "./CarouselContainer.module.scss"
import React, { useEffect, useState } from "react"
import { angleLeft, angleRight } from "src/icon"

function CarouselContainer({children, widthItem, num}){

    const c = classNames.bind(styles)
    const [index, setIndex] = useState(0);
    const totalItems = React.Children.count(children);

    const nextSlide = () => setIndex((prev) => (prev + 1) % totalItems);
    const prevSlide = () => setIndex((prev) => (prev - 1 + totalItems) % totalItems);

    useEffect(() => {
        const autoSlide = setInterval(() => {
            if(index !== totalItems - num) nextSlide()
            if(index === totalItems - num) setIndex(0)
        }, 5000)

        return () => clearInterval(autoSlide)
    })

    return(
        <div className={c('carousel-wrap')}>
            <div className={c('carouselContent')}>
                <div className={c('flex','col-gap-18','carouselTrack')} 
                    style={{
                            transform: `translateX(-${index * (widthItem)}%)`,
                           }}>
                    {children}
                </div>
            </div>
            <button className={c('arrow-left', index === 0 || 'active')} onClick={prevSlide} disabled = {index === 0}>{angleLeft}</button>
            <button className={c('arrow-right', index === totalItems - num || 'active')} onClick={nextSlide} disabled = {index === totalItems - num} >{angleRight}</button>
        </div>
    )
}

export default CarouselContainer

/**/