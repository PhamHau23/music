import { createContext } from "react";

const PlaySongSelectedContext = createContext()

function PlaySongSelectedProvider({children}){

    return(
        <PlaySongSelectedContext.Provider>
            {children}
        </PlaySongSelectedContext.Provider>
    )
}

export {PlaySongSelectedContext, PlaySongSelectedProvider}