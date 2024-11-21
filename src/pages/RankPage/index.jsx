import classNames from "classnames/bind"
import styles from "./RankPage.module.scss"
import { genresConfig } from "src/configs/genresConfig"
import GenreList from "src/components/GenreList"
import Genres from "src/components/Genres"

function RankPage(){

    const c = classNames.bind(styles)

    return (
        <div>
            <div className={c('RankPage-banner')}>
                <p>TOP 100</p>
            </div>

            <div>
                
            </div>
        </div>
    )
}

export default RankPage