import classNames from "classnames/bind"
import styles from "./Home.module.scss"
import Banner from "./components/Banner"
function Home(){

    const c = classNames.bind(styles)

    return(
        <div className={c('home-page')}>
            {<Banner />}
        </div>
    )
}

export default Home