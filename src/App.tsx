import './App.css'
import { Button, ColorRed } from './components'
import { AppForm } from './components/organisms/AppForm/AppForm'
//COMPOSITION PATTERN
//diferencia entre JSX.Element y ReactNode 
//JSX.Element es un tipo de dato que representa un elemento JSX
//ReactNode es un tipo de dato que representa cualquier tipo de nodo en react


// User Ejemplo


function App() {
  /**
   * La forma de comunicarse los componente de padre a hijo
   * es a través de props
   * otros a traves de context
   * y el customhook es otra forma de comunicación
   */

  /**
   * 
   * la magia data.age data.name data.lastName
   * solito ya sabemos que es de tipo Data
   * y esta tipado
   */
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
    //la logica es del ap componente
    //colorred debe ser lo mas chiquito y atomizable posible 
    //y el color red debe ser reutilizable
    //parte buena hacer propiedades
    //Esta es una form a para pasar props para un componente hijo
    <ColorRed><Button parentMethod={dimeHola}>My Boton RojJO</Button></ColorRed>
    <Button parentMethod={handleClick}>que onda</Button>

    //COMPOSITION PATTERN
    <AppForm>
      //Aqui podrias pasar los inputs
      <button type="submit" onClick={submit}>Enviar</button>
    </AppForm>
    </>
  )
}


export default App
