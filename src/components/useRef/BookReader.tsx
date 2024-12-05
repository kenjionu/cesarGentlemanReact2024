//1. objetivo crear una referencia mutabble que persiste durante todo el sitio de vida en todo el componente
// sin causar un rerender a un elemento del DOM
//2. Objetivo hace referencia a un elemento del DOM
//3. 

import { useRef, useState } from "react"

//Ejemplo: imaginate leer un libro y teniendo este libro poner un marcador
//en cualquier lugar sirve para recordar donde dejamos la lectura pero por poner el
//el marcador aca afecto (modifica) el contenido del libro?
//no
//Y asi es el concepto de useRef
//no modifica el contenido del libro, solo marca el lugar
    export const BookReader = () => {
        const currentPageRef = useRef<number>(1)
        const [currentPage, setCurrentPage] = useState(1)



    const nextPage = () => {
        currentPageRef.current += 1
        console.log(`Avanzate a la pagina ${currentPageRef.current}`)
    }

    const previousPage = () => {
        if(currentPageRef.current === 1){
            console.log(`No puedes retroceder la pagina, porque ya te encuentras
            en la pagina ${currentPageRef.current}`)
            return
        }
        currentPageRef.current -=1;
        console.log(`Retrocediste a la pagina ${currentPageRef.current}`)
    }

    const goToPage = (page: number) => {
        if(page < 1) {
            console.log(`no se puede saltar a un valor imposible ${page}`)
            return
        }
    
        currentPageRef.current = page;
        setCurrentPage(page)
        console.log(`Haz saltado a la  pagina ${currentPageRef.current}`)

    }

    return(
        <div>
        <h2>Lectura de pagina</h2>
        <p>Pagina actual: {currentPageRef.current}</p>
        <p>Pagina actual: [ STATE ] {currentPage}</p>
        <button onClick={previousPage}>Pagina anterior</button>
        <button onClick={nextPage}>Pagina siguiente</button>
        <button onClick={() => { goToPage(50)}}>Ir a la pagina 50</button>
        </div>
    )

}


