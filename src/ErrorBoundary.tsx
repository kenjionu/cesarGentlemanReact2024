import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryState {
    hasError: boolean;
}

interface ErrorBoundaryProps {
    children: ReactNode
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState{
        {
            console.log("Derived Error", error)
            return { hasError: true }
        }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log(`Error: ${error}`)
        console.log(`Error info: ${errorInfo}`)
    }

    render(){
        if(this.state.hasError){
            return "<h1>Oops algo salio mal</h1>"
        }

        return this.props.children
    }

}

export default ErrorBoundary;
