import classNames from "classnames/bind"
import styles from "./HomeRankItem.module.scss"
import HoverSongAni from "src/components/HoverSongAni"

function HomeRankItem({data}){

    const c = classNames.bind(styles)

    return (
        <div className="flex col-gap-18 over-hidden">
            {
                data.map((item, index) => (
                    <div className={c('homeRankList-item')} key={index}>
                        <a href="/">
                            <div className={c('img')}>
                                <img src={item.img} />
                                <HoverSongAni />
                            </div>

                            <div className={c('info', 'w-100')}>
                                <div className={c('top', 'w-100')}>
                                    <p className="t-line1" style={{width: '100%'}}>{item.songName}</p>
                                    <p className="t-line2" style={{width: '100%'}}>{item.singerName}</p>
                                </div>

                                <div className={c('bot')}>
                                    <span>#{item.top}</span>
                                    <p>{item.upLoadDate}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))
            }        
        </div>
    )
}

export default HomeRankItem