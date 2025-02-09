import classNames from "classnames/bind"
import styles from './SearchData.module.scss'
import { LoadingIcon } from "~/icon"
import { convertSeconds } from "~/lib/convertSeconds"
import { capitalizeWords } from "~/lib/capitalizeWords"
import { useDispatch } from "react-redux"
import { fetchSongById } from "~/hooks/useGetSong"
import { fetchSongApi } from "~/redux/slices/musicPlayerSlice"

const c = classNames.bind(styles)

export const SearchData = ({data}) =>{
    const dispatch = useDispatch()

    const handleClick = (id) => {
        dispatch(fetchSongApi(id))
    }

    return (
        <div className={c('container')}>
            {
                data === undefined ? 
                <LoadingIcon /> :
                <div className={c('data')}>
                    {data.map(item => (
                        <div className={c('item','flex')} key={item._id} onClick={() => handleClick(item._id)}>
                            <img src={item.img} alt="" />
                            <div className={c('info','flex')}>
                                <span className={c('name')}>{capitalizeWords(item.name)}</span>
                                <div className="flex">
                                    {item.singerName.map((item, i) => (
                                        <a key={i}>
                                            {capitalizeWords(item)}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <span className={c('duration')}>{convertSeconds(item.duration)}</span>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}