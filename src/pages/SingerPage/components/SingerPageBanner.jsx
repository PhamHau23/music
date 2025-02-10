import classNames from "classnames/bind"
import styles from "../SingerPage.module.scss"
import { FollowIcon, PlaySongIcon } from "~/icon"
import Button from "~/components/Button"
import { capitalizeWords } from "~/lib/capitalizeWords"

const c = classNames.bind(styles)

const SingerPageBanner = ({data}) => {

    return(
        <div className={c('banner')}>
            <div className={c('info')}>
                <img src={data.img} alt="" />
                <div className={c('info-item')}>
                    <div className={c('item-1','item')}>
                        <h1>{capitalizeWords(data.name)}</h1>
                        <div><PlaySongIcon /></div>
                    </div>
                    <div className={c('item-2','item')}>
                        <span>follow</span>
                        <Button children={'Follow'} icon={<FollowIcon />} style={'fw-400 fs-12em'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingerPageBanner