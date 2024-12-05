import { useRef } from "react"
//otra forma de usar useRef desde un lado puedo referenciar un elemento del DOM y desde el otro lado puedo acceder a ese elemento
export const FocusInput = () => {
    const InputRef = useRef<HTMLInputElement>(null)

    const handleButtonClick = () => {
        if(!InputRef.current) {
            console.log(`No hay input, no existe la referencia al elemento`)
            return
        }
        InputRef.current.focus(

        )
    }

    return (
        <div>
            <input ref={InputRef} type="text" placeholder="Escribe algo" />
            <button onClick={handleButtonClick}>Enfocar en el input</button>
        </div>
    )
}