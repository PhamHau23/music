import { createContext } from "react"

const GetApiDataContext = createContext()

function GetApiDataProvider({children, value}){
    return(
        <GetApiDataContext.Provider value={{value}}>
            {children}
        </GetApiDataContext.Provider>
    )
}

export {GetApiDataContext, GetApiDataProvider}