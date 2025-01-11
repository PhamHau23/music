import classNames from "classnames/bind"
import styles from "./RadioPageItem.module.scss"
import HoverSongAni from "src/components/HoverSongAni"

const img1 = ''
const img2 = ''
    

const arr = [
    {
        img1,
        img2,
        radioName: 'Acountic',
        nbListen: '12'
    },

    {
        img1,
        img2,
        radioName: 'EU',
        nbListen: '12'
    },

    {
        img1,
        img2,
        radioName: 'Việt Nam',
        nbListen: '12'
    },

    {
        img1,
        img2,
        radioName: 'Nhật Bản',
        nbListen: '12'
    },

    {
        img1,
        img2,
        radioName: 'Hàn Quốc',
        nbListen: '23'
    },

    {
        img1,
        img2,
        radioName: 'Trung Quốc',
        nbListen: '34'
    }
]

function RadioPageItem(){
    
    const c = classNames.bind(styles)

    return(
        <div className={c('radioItem-wrap', 'flex')}>
            {arr.map((item, index) => (
                <div className={c('radioItem')} key={index}>
                    <div className={c('radioImg1')}>
                        <img src={item.img1} alt="" className={c('mainImg')}/>
                        <HoverSongAni />
                    </div>

                    <div className={c('radioImg2')}>
                        <img src={item.img2} alt="" className={c('subImg')}/>
                    </div>
                    <div className={c('radioInfo')}>
                        <p className={c('radioType')}>{item.radioName}</p>
                        <span>{item.nbListen} người đang nghe</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RadioPageItem