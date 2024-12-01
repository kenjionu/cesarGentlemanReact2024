interface Props {
    label: string;
    parentMethod: () => void;
}
export const Button = ({label, parentMethod}: Props) => {
    return (
        <button 
        className='custom-button'
        type="button"
        onClick={parentMethod}>
        {label}
      </button>
      )
}
