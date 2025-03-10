import SongPageList from "./components/SongPageList"
import SongPageInfo from "./components/SongPageInfo"
import { useParams } from "react-router-dom"
import useFetchApi from "~/hooks/useFetchApi"
import { GetApiDataProvider } from "~/contexts"

function SongPage(){
    const {genreId} = useParams()
    const apiData = useFetchApi(`songpage/${genreId}`)

    if (!apiData || !apiData.data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex">
            <SongPageInfo data={apiData.data.genre}/>
            <GetApiDataProvider value={apiData.data.songsList}>
                <SongPageList/>
            </GetApiDataProvider>
        </div>
    )
}

export default SongPage