//objetivo 1: nos permite crear una referencia mutable que persiste durate todo el ciclo de vida del componente
//Sin causar un RE-RENDER

import { useRef } from "react"

//useRef vs useCallback
//useRef es para guardar un valor que queremos que se comparta entre renders
//useCallback es para guardar una función entre renders

 
//objetivo 2: hacer referencia a un eleemento del DOM
/// Ejemplo:
// un marcador de un libro que utilizamos para guardar la última posición de la lectura
//No modifica el contnenido del libro.

export const BookReader = ()  => {
    const currentPageRef = useRef<number>(1)

    const nextPage = () => {
        currentPageRef.current += 1;
        console.log(`Avanzaste a la página ${currentPageRef.current}`)
    }

    const previousPage = () => {
        if(currentPageRef.current === 1) {
            console.log('No se puede retroceder la pagina')
            return;
        }
        
        currentPageRef.current -=1;
        console.log(`Retrocediste a la página ${currentPageRef}`);
    }

    const goToPage = (page:number) => {
        if(page < 1) {
            console.log('no se puede saltar a un valor imposible')
            return;
        }
    
        currentPageRef.current = page;
        console.log(`te saltaste a la página ${currentPageRef.current}`)
    }

    return(
        <div>
            <h2>Lectura de libro</h2>
            <p>Pagina actual: {currentPageRef.current}</p>
            <button onClick={nextPage}>Siguiente página</button>
            <button onClick={previousPage}>Página anterior</button>
            <button onClick={() => { goToPage(50)}}>Ir a la página de 50</button>
        </div>
    )
}



export default BookReader;