import classNames from "classnames/bind"
import styles from "./NationList.module.scss"
import { useNavigate } from "react-router-dom"

const img = [
    'https://photo-zmp3.zmdcdn.me/cover/9/5/8/e/958e9994c6720513cc84a7f7a478020b.jpg',
    'https://photo-zmp3.zmdcdn.me/cover/d/6/4/0/d640e486023bb0bc1bbe4d94209ff648.jpg',
    'https://photo-zmp3.zmdcdn.me/cover/9/0/c/6/90c615657364a570232d7f6e86ffa6da.jpg',
    'https://photo-zmp3.zmdcdn.me/cover/0/6/e/0/06e09e84d6c6ef29f588e0c6032d72bf.jpg'
]


const arr = [
    {
        nationId: 'vn',
        nationName: 'NHẠC VIỆT',
        nationImg: img[0]
    },
    {
        nationId: 'eu',
        nationName: 'NHẠC ÂU MỸ',
        nationImg: img[1]
    },
    {
        nationId: 'kr',
        nationName: 'NHẠC HÀN QUỐC',
        nationImg: img[2]
    },
    {
        nationId: 'cn',
        nationName: 'NHẠC HOA',
        nationImg: img[3]
    }
]

function NationList({title}){
    const c = classNames.bind(styles)

    const navigate = useNavigate()

    const handleClickNavigate = (nation) => {
        navigate(`/genres/${nation} `, {state: arr.find(item => item.nationId === nation && item)})
    }

    return(
        <div className={c('nationList-wrap')}>
            <div className="title">
                <h1>{title}</h1>
            </div>

            <div className={c('nationList')}>
                {
                    arr.map((item) => (
                        <div className={c('nationItem')} key={item.nationId} onClick={() => handleClickNavigate(item.nationId)}>
                            <img src={item.nationImg} alt="" />
                            <p>{item.nationName}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default NationList