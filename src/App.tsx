import './App.css'
import { Button, ColorRed } from './components';
import { GlobalProvider } from './context/global.provider';

function App() {

  const handleClick = () => {
    console.log('hoy me clickeo todo')
  }

  const dimeHola = () => {
    alert('hola')
  }
  const submit = () => {
    console.log("submit")
  }

  return (
    <>
      <GlobalProvider>
        <ColorRed><Button parentMethod={dimeHola} >My Boton Rojo</Button></ColorRed>
        <Button parentMethod={handleClick} >Mi botón normal</Button>
      </GlobalProvider>
    </>
  )
}


export default App
