import { useParams } from "react-router-dom"
import classNames from "classnames/bind"
import styles from "./GenrePage.module.scss"
import SongListType2 from "~/components/SongListType2"
import { GetApiDataProvider, SongDataProvider } from "~/contexts"
import Genres from "~/components/Genres"
import useFetchApi from "~/hooks/useFetchApi"
import { GenrePageBanner } from "./components/GenrePageBanner"


function GenrePage(){
    const c = classNames.bind(styles)
    const {id} = useParams() 
    const data = useFetchApi(`genrepage/${id}`)

    if (!data || Object.keys(data).length === 0) {
        return <div>Loading...</div>;
    }

    return(
        <div className={c('genrePage')}>
            <GenrePageBanner data={data.nation}/>
            <div>
                <GetApiDataProvider value={data.data.prominentGenre}>
                    <Genres title={'Nổi Bật'} />
                </GetApiDataProvider>
            </div>
            <div>
                <SongDataProvider value={data.data.hotSongs}>
                    <SongListType2 title={'Hot Songs'} />
                </SongDataProvider>
            </div>
        </div>
    )
}


export default GenrePage