import classNames from "classnames/bind"
import styles from "./NewMusicList.module.scss"
import Button from "~components/Button"
import { useEffect, useState } from "react"

function NewMusicList(){
    const c = classNames.bind(styles)
    const [click, setClick] = useState('')

    // useEffect((() =>{
    //     return click
    // }),[click])

    return(
        <div>
            <h1>Mới Phát Hành</h1>
            <div className={c('Newmusic-wrap')}>
                <div className={c('Newmusic-select-list')}>
                    <div>
                        <Button children={'TẤT CẢ'} click={click} setClick={setClick}/>
                        <Button children={'VIỆT NAM'} click={click} setClick={setClick}/>
                        <Button children={'QUỐC TẾ'} click={click} setClick={setClick}/>
                    </div>

                    <span>
                        <a href="/">{`${'TẤT CẢ >'}`}</a>
                    </span>
                </div>

                <ul>
                    {click}
                    {/* <li>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <a href="/">Name music</a>
                            <a href="/">Name Singer</a>
                            <p>Time update</p>
                        </div>
                        <div>
                            <span>...</span>
                        </div>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default NewMusicList