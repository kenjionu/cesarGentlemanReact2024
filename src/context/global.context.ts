import { createContext, useContext } from "react";

interface GlobalContextType {

    value: number | null;
    setValue: React.Dispatch<React.SetStateAction<number>>;
}


//createContext maneja un estado
//el estado no es el emptyglobalstate una cosa es el valor del estado y otra  es como lo maneja el contexto

//tngo un valor y le cambio su valor
/** que pasa cunado tengo conflictos on ideologia
 * segun el valor que quiera hacer cambia el valor del estado
 * el problema que voy ha cambiar el valor del estado dependiendo de la accion que se haga
 * Tranquilamente dentro de tu context puedes hacerlo con useState
 */
export const GlobalContext = createContext<GlobalContextType>({
    value: null,
    setValue: () => {}
})

//Por que no llega el contexto a veces?
//Vamos a crear nuestor propio hook para usar el contexto
//useContext es para usar el contexto
export const useGlobalContext = () => {
    const context = useContext(GlobalContext)

    if(!context.value && context.value !== 0) {
        throw new Error('GlobalContext must be used within a GlobalContextProvider')
    }

    return context;
}
//nunca usar el contexto fuera del provider


