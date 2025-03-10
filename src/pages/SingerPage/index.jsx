import classNames from "classnames/bind"
import styles from "./SingerPage.module.scss"
import SingerPageBanner from "./components/SingerPageBanner"
import NewSong from "./components/NewSong"
import HotSongs from "./components/HotSongs"
import { SongDataProvider } from "~/contexts"
import useFetchApi from "~/hooks/useFetchApi"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setPlayList } from "~/redux/slices/musicPlayerSlice"


const c = classNames.bind(styles)
const SingerPage = () => {

    const {slug} = useParams()
    const dispatch = useDispatch()
    const apiData = useFetchApi(`singerpage/${slug}`)

    if (!apiData || Object.keys(apiData).length === 0) {
        return <div>Loading...</div>;
    }

    dispatch(setPlayList(apiData.data.hotSong))

    return(
        <div className={c('container')}>
            <SingerPageBanner data={apiData.data.singerInfo}/>
            <div className="flex w-100 tabletSingerPage">
                <NewSong data={apiData.data.newSong}/>
                <SongDataProvider value={apiData.data.hotSong}>
                    <HotSongs/>
                </SongDataProvider>
            </div>
        </div>
    )
}

export default SingerPage