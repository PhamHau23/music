import classNames from "classnames/bind"
import styles from "./CategoryList.module.scss"
import Category from "./components/Category"

const img1 = 'https://res.cloudinary.com/dtzqisgc8/image/upload/v1729336892/webMusic/t%E1%BA%A3i_xu%E1%BB%91ng_1_tth1sq.jpg'
const img2 = 'https://res.cloudinary.com/dtzqisgc8/image/upload/v1729317972/webMusic/t%E1%BA%A3i_xu%E1%BB%91ng_xlevmc.jpg'

const arr1 = [
    {
        img: img1,
        subTitle: 'bach tu tu'
    },
    {
        img: img1,
        subTitle: 'bach tu tu'
    },
    {
        img: img1,
        subTitle: 'bach tu tu'
    },
    {
        img: img1,
        subTitle: 'bach tu tu'
    },
    {
        img: img1,
        subTitle: 'bach tu tu'
    }
]

const arr2 = [
    {
        img: img2,
        subTitle: 'duong vu dong'
    },
    {
        img: img2,
        subTitle: 'duong vu dong'
    },
    {
        img: img2,
        subTitle: 'duong vu dong'
    },
    {
        img: img2,
        subTitle: 'duong vu dong'
    },
    {
        img: img2,
        subTitle: 'duong vu dong'
    }
]


function CategoryList(){   
    const c = classNames.bind(styles)

    return(
        <div className={c('Category-list')}>
            <Category title={'Thể Loại Hot'} data={arr1}/>
            <Category title={'Nhạc Chill'} data={arr2}/>
        </div>
    )
}

export default CategoryList