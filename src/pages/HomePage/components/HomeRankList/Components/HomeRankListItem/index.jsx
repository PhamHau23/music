import classNames from "classnames/bind"
import styles from "./HomeRankItem.module.scss"

const img = 'https://i.pinimg.com/564x/d7/79/50/d7795026c03f26b13cd751cfb062691b.jpg'

const day = new Date

const upLoadDate = `${day.getUTCDate()}/${day.getUTCMonth() + 1}/${day.getUTCFullYear()}`

const arr = [
    {
        img,
        songName: 'hope is the thing with feather',
        singerName: 'robin',
        top: 1,
        upLoadDate
    },

    {
        img,
        songName: 'hope is the thing with feather',
        singerName: 'robin',
        top: 2,
        upLoadDate
    },

    {
        img,
        songName: 'hope is the thing with feather',
        singerName: 'robin',
        top: 3,
        upLoadDate
    },

    {
        img,
        songName: 'hope is the thing with feather',
        singerName: 'robin',
        top: 4,
        upLoadDate
    }
]


function HomeRankItem(){

    const c = classNames.bind(styles)

    return (
        <div className="flex col-gap-18 over-hidden">
            {
                arr.map((item, index) => (
                    <div className={c('homeRankList-item')} key={index}>
                        <a href="/">
                            <img src={item.img} />

                            <div className={c('info')}>
                                <div className={c('top')}>
                                    <p>{item.songName}</p>
                                    <p>{item.singerName}</p>
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