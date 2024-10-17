import classNames from "classnames/bind"
import styles from "./NewMusicList.module.scss"
import Button from "~components/Button"
import { useEffect, useState } from "react"
import useFetchData from "~/hooks/useFetchData"
import { dau3Cham } from "~/icon"

const vn = [1,2,3,4,5]
const qt = [6,7,8,9,10]
const all = [...vn,...qt]
const img = 'https://res.cloudinary.com/dtzqisgc8/image/upload/v1728973355/webMusic/z5931269727500_28c24b4c3b60750350935ecaab5763cc_nzks20.jpg'


function NewMusicList(){
    const c = classNames.bind(styles)
    const [click, setClick] = useState('TẤT CẢ')
    const [url, setUrl] = useState(all)
    const music = useFetchData(url)

    const handleClick = (newUrl, butonClick) => {
        setUrl(newUrl)
        setClick(butonClick)
    }

    console.log('re-render')


    return(
        <div>
            <h1>Mới Phát Hành</h1>
            <div className={c('Newmusic-wrap')}>
                <div className={c('Newmusic-select')}>
                    <div>
                        <Button children={'TẤT CẢ'} onClick={() => handleClick(all, 'TẤT CẢ')} click={click}/>
                        <Button children={'VIỆT NAM'} onClick={() => handleClick(vn, 'VIỆT NAM')} click={click}/>
                        <Button children={'QUỐC TẾ'} onClick={() => handleClick(qt, 'QUỐC TẾ')} click={click}/>
                    </div>

                    <span>
                        <a href="/">{`${'TẤT CẢ >'}`}</a>
                    </span>
                </div>

                <div className={c('Newmusic-list-wrap')}>
                    <div className={c('Newmusic-list')}>
                        <div className={c('Newmusic-item')}>
                            <div className={c('flex')}>
                                <div className={c('Newmusic-img')}>
                                    <img src={img} alt="" />
                                </div>
                                <div className={c('Newmusic-info')}>
                                    <a href="/" className={c('name-music')}>Name music</a>
                                    <a href="/" className={c('name-singer')}>Name Singer</a>
                                    <p className={c('time')}>Time update</p>
                                </div>
                            </div>
                            <div className={c('other-option')}>
                                <i>{dau3Cham}</i>
                            </div>
                        </div>
                        
                        <div className={c('Newmusic-item')}>
                            <div className={c('flex')}>
                                <div className={c('Newmusic-img')}>
                                    <img src={img} alt="" />
                                </div>
                                <div className={c('Newmusic-info')}>
                                    <a href="/" className={c('name-music')}>Name music</a>
                                    <a href="/" className={c('name-singer')}>Name Singer</a>
                                    <p className={c('time')}>Time update</p>
                                </div>
                            </div>
                            <div className={c('other-option')}>
                                <i>{dau3Cham}</i>
                            </div>
                        </div>

                        <div className={c('Newmusic-item')}>
                            <div className={c('flex')}>
                                <div className={c('Newmusic-img')}>
                                    <img src={img} alt="" />
                                </div>
                                <div className={c('Newmusic-info')}>
                                    <a href="/" className={c('name-music')}>Name music</a>
                                    <a href="/" className={c('name-singer')}>Name Singer</a>
                                    <p className={c('time')}>Time update</p>
                                </div>
                            </div>
                            <div className={c('other-option')}>
                                <i>{dau3Cham}</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewMusicList