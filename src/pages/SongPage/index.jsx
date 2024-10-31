import SongPageList from "./components/SongPageList"
import SongPageInfo from "./components/SongPageInfo"

function SongPage(){
    return (
        <div className="flex">
            <SongPageInfo />
            <SongPageList />
        </div>
    )
}

export default SongPage