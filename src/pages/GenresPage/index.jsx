import classNames from "classnames/bind"
import styles from "./GenresPage.module.scss"

function GenresPage(){
    const c = classNames.bind(styles)
    const img = 'https://res.cloudinary.com/dtzqisgc8/image/upload/v1730361708/t%E1%BA%A3i_xu%E1%BB%91ng_3_ap7x4p.jpg'

    return(
        <div className={c('genresPage-wrap')}>
            <div className={c('genresPage-img')}>
                <img src={img} alt="" />
            </div>
            <div className={c('featured-list')}>
                <div className={c('featured-item')}>
                    <p>item1</p>
                </div>

                <div className={c('featured-item')}>
                    <p>item1</p>
                </div>

                <div className={c('featured-item')}>
                    <p>item1</p>
                </div>

                <div className={c('featured-item')}>
                    <p>item1</p>
                </div>

                <div className={c('featured-item')}>
                    <p>item1</p>
                </div>
            </div>
        </div>
    )
}

export default GenresPage