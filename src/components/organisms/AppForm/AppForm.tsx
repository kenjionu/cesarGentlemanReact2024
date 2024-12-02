import { ReactNode } from "react"

interface FormProps {
    children: ReactNode;
}
export const AppForm = ({children}: FormProps) => {

    return (
        <form>
            {/*inputs*/}
            {children}
        </form>
    )
}