import { createContext } from "react"

const SongDataContext = createContext()

function SongDataProvider({children, value}){

    console.log(value)
    return (
        <SongDataContext.Provider value={{value}}>
            {children}
        </SongDataContext.Provider>
    )
}

export {SongDataContext, SongDataProvider}