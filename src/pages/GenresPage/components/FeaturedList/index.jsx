import { useState } from "react"
import classNames from "classnames/bind"
import styles from "./FeaturedList.module.scss"
import DpAllItem from "../DpAllBtn"

const img = 'https://res.cloudinary.com/dtzqisgc8/image/upload/v1730361708/t%E1%BA%A3i_xu%E1%BB%91ng_3_ap7x4p.jpg'


const arr = [
    {img, name: 'BXH Nhạc Mới'},
    {img, name: 'BXH Nhạc Mới'},
    {img, name: 'BXH Nhạc Mới'},
    {img, name: 'BXH Nhạc Mới'},
    {img, name: 'BXH Nhạc Mới'},
    {img, name: 'BXH Nhạc Mới'},
    {img, name: 'BXH Nhạc Mới'}
]

function FeaturedList({title}){

    const [dpAllItem, setDpAllItem] = useState(false)

    const c = classNames.bind(styles)

    return(
        <div className={c('featured-wrap')}>
            <div className="title">
                <h1>{title}</h1>
            </div>
                <div className={c('featured-list')} >
                    {arr.map((item, index) => (
                            <div className={c('featured-item')} key={index} style={index > 3 && dpAllItem === false ? {display: "none"} : {}}>
                                <img src={item.img} alt="" />
                                <p>{item.name}</p>
                            </div>
                    ))}
                </div>
            {dpAllItem === false && <DpAllItem dpAllItem={dpAllItem} setDpAllItem={setDpAllItem}/>}
        </div>
    )
}

export default FeaturedList