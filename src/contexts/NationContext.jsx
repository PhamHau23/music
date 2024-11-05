import { createContext, useState } from "react";

const NationContext = createContext()

function NationProvider({children}){
    const [nation, setNation] = useState(null)

    return (
        <NationContext.Provider value={{nation, setNation}}>
            {children}
        </NationContext.Provider>
    )
}

export {NationContext, NationProvider}