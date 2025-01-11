import classNames from "classnames/bind"
import styles from "./RankPage.module.scss"

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