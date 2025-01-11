import classNames from "classnames/bind"
import styles from "./GenresPage.module.scss"
import FeaturedList from "./components/FeaturedList"
import NationList from "./components/NationList"
import TopicList from "./components/TopicList"
import Genres from "src/components/Genres"
const img = 'https://res.cloudinary.com/dtzqisgc8/image/upload/v1730361708/t%E1%BA%A3i_xu%E1%BB%91ng_3_ap7x4p.jpg'


function GenresPage(){
    const c = classNames.bind(styles)

    return(
        <div className={c('genresPage-wrap')}>
            <div className={c('genresPage-img')}>
                <img src={img} alt="" />
            </div>
            <FeaturedList title={'Nổi Bật'} />
            <NationList title={'Quốc Gia'} />
            <TopicList title={'CHỦ ĐỀ'} />
        </div>
    )
}

export default GenresPage