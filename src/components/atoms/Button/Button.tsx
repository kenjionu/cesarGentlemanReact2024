import { ReactNode, useContext } from "react";
import './Button.css'
import { GentlemanContext } from "../../../App";

//COMPOSITION PATTERN

interface Props {
    children: ReactNode;
    parentMethod: () => void;
}

interface ChildrenProps {
    children: ReactNode
}


export const ColorRed = ({children}: ChildrenProps) => {
    const gentlemanContext = useContext(GentlemanContext)
    return (<><div className="color-red">
        The color inside is {gentlemanContext}
        {children}</div></>)

}

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
