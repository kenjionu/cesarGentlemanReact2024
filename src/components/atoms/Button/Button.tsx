import { ReactNode } from "react";
import './Button.css'

//COMPOSITION PATTERN

interface Props {
    children: ReactNode;
    parentMethod: () => void;
}

interface ChildrenProps {
    children: ReactNode
}

//Este omit para omitir el parentMethod
/*export const ChildrenButton = ({label}: Omit<Props, "parentMethod">) => {
    return (
        <div>
            {label}
        </div>
    )
}
    */
//o tambien otro ejemplo
export const ColorRed = ({children}: ChildrenProps) => {
    return (<><div className="color-red">{children}</div></>)
    //si estos returnara un componente seria un ReactNode
    //pero si retorna un JSX.Element es un ReactNode
    //ReactNode es todo lo que peude renderizar react
    //JSX.Element es un interface y esta deprecados 
}

//Este button tiene problemas de dependencias prop drilling
//prop drilling es cuando pasas del App al button y del button al ChildrenButton
//Cual es el problema de esto?
//Que si yo quiero agregar un nuevo componente entre el App y el button
//tengo que modificar el componente button para que reciba el nuevo componente
//y asi sucesivamente

//Como se soluciona?
//Usando context

//esto es composition pattern 
//es decir, se compone de otros componentes
// es tratar de separar la logica del padre es la del padre y la del hijo es la del hijo
//tratar agilizar este tipo de desarrollo
export const Button = ({children, parentMethod}: Props) => {
    return (
        <button 
        className='custom-button'
        type="button"
        onClick={parentMethod}>
            {children}
        </button>
      )
}
