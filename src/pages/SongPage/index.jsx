import SongPageList from "./components/SongPageList"
import SongPageInfo from "./components/SongPageInfo"
import { useParams } from "react-router-dom"
import useFetchApi from "~/hooks/useFetchApi"
import { GetApiDataProvider } from "~/contexts"

function SongPage(){
    const {genreId} = useParams()
    const data = useFetchApi(`songpage/${genreId}`)

    if (!data || Object.keys(data).length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex">
            <SongPageInfo data={data.genre}/>
            <GetApiDataProvider value={data.songsList}>
                <SongPageList/>
            </GetApiDataProvider>
        </div>
    )
}

export default SongPage