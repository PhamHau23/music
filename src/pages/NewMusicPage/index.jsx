import classNames from "classnames/bind"
import styles from "./NewMusicPage.module.scss"
import { playIcon1 } from "~/icon"
import SongList from "~/components/SongList"
import useFetchApi from "~/hooks/useFetchApi"
import { GetApiDataProvider } from "~/contexts"

export default function NewMusicPage(){

    const c = classNames.bind(styles)
    const apiData = useFetchApi('newsongpage')

    if(!apiData || !apiData.data){
        return(
            <div>loading...</div>
        )
    }

    return (
        <div className={c('newMusicPage')}>
            <div className={c('newMusicPage-title')}>
                <div className="flex al-center">
                    <h1>BXH Nhạc Mới</h1>
                    <span className={c('NewMusicPage-icon')}>{playIcon1}</span>
                </div>
            </div>
            {
                <GetApiDataProvider value={apiData.data}> 
                    <SongList />
                </GetApiDataProvider>
            }
        </div>
    )
}