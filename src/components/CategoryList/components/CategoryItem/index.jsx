import classNames from "classnames/bind"
import styles from "./CategoryItem.module.scss"


function CategoryItem({data}){

    const url = 'https://res.cloudinary.com/dtzqisgc8/image/upload/v1729317972/webMusic/t%E1%BA%A3i_xu%E1%BB%91ng_xlevmc.jpg'
    const c = classNames.bind(styles)

    const arr = data.map((item) => item.subTitle)

    console.log(arr[0])

    return(
        <div className={c('category-item-wrap')}>
            {data.map((item, index) => (
                <div className={c('item')} key={index}>
                    <a href="/">
                        <img src={item.img} alt="" />
                    </a>
                    <div className={c('title')}>
                        <p>{item.subTitle}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CategoryItem