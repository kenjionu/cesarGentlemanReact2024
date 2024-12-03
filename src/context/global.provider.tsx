import { ReactNode, useState } from "react"
import { GlobalContext } from "./global.context";

interface GlobalProps {
    children: ReactNode;
}

const EmptyGlobalState: number =  0

export const GlobalProvider  = ({children}: GlobalProps) => {
    const [value, setValue] = useState<number>(EmptyGlobalState)//este es el contexto realmente

    return (
        <GlobalContext.Provider value={{ value, setValue}}>
        {children}
        </GlobalContext.Provider>
    )
}
