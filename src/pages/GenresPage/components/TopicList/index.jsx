import classNames from "classnames/bind"
import { useState } from "react"
import styles from "./TopicList.module.scss"
import DpAllItem from "../DpAllBtn"

const img1 = 'https://photo-zmp3.zmdcdn.me/cover/0/8/e/1/08e1f820e5b2c16217c11a4f77f3680b.jpg'
const img2 = 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/0/d/0/f0d098c33ceaa8435e9c17b33f159418.jpg'

const arr = [
    {
        topicName: 'DIINER',
        topicImg: img1,
        topicSubImg: [img2, img2, img2]
    },
    {
        topicName: 'RUNNING',
        topicImg: img1,
        topicSubImg: [img2, img2, img2]
    },
    {
        topicName: 'CHƠI GAME',
        topicImg: img1,
        topicSubImg: [img2, img2, img2]
    },
    {
        topicName: 'WORKOUT',
        topicImg: img1,
        topicSubImg: [img2, img2, img2]
    },
    {
        topicName: 'YOGA',
        topicImg: img1,
        topicSubImg: [img2, img2, img2]
    },
    {
        topicName: 'LOFI',
        topicImg: img1,
        topicSubImg: [img2, img2, img2]
    }
]

function TopicList({title}){

    const c = classNames.bind(styles)
    const [dpAllItem, setDpAllItem] = useState(false)

    return(
        <div className={c('topicList-wrap')}>
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className={c('topicList')}>
                {
                    arr.map((item, index) => (
                        <div className={c('topicItem')} key={index} style={index > 3 && dpAllItem === false ? {display: 'none'} : {}}>
                            <img src={item.topicImg} alt=""/>
                            <div className={c('topicInfo')}>
                                <p>{item.topicName}</p>
                                {
                                    item.topicSubImg.map((subItem, index) => (
                                        <div className={c('topInfo-img')} key={index}>
                                            <img src={subItem} alt="" />
                                            <img src={subItem} alt="" />
                                            <img src={subItem} alt="" />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                {dpAllItem === false && <DpAllItem dpAllItem={dpAllItem} setDpAllItem={setDpAllItem} />}
            </div>
        </div>
    )
}

export default TopicList