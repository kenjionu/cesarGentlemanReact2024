import { createContext, useState } from 'react';
import './App.css'
import CustomForm from './components/organisms/CustomForm/CustomForm'
import { Button, ColorRed } from './components';

/** llamando jugando con el hook de react context */
export const GentlemanContext = createContext({});

/**un contexto es como un canal de comunicación entre componentes
 * Tenemos un tubo de comunicación y este tubo dentro de este tubo podemos tener un valor y dentro de este tubo varios estaran viendo es como un tubo de comunicacion
 */

/** LA programación reactiva es un canal de comunicación entre componentes donde reacciona de manera reactiva, reacciona segun el evento que viene, hay gente que va a emitir datos y otros que estaran escuchando a ese canal */
/**
 * /** un cotnext siempre debe entrar un Provider
 * El provider es al que le damos valor algo que va englobar mi codigo en dom todo lo que este dentro de este provider 
 * puede escuchar este context (contexto)
 * ¿Que es provider prop? estamos diciendo como va acceder y modificar este canal de comunicacion
 * 
 *
 * 
 * @returns Vamos a ver lo que es un context o mejor dicho contexto
 * vamos a ver como comportartir una información un padre y el componente hijo App padre  y el hijo de del hijo children
 */
function App() {
  /**esto es espantoso no se debe hacer */
  /** es logica del app controlar este contexto? nooooo */
  const [gentlemanContextValue, setGentlemanContextValue] = useState(false);
 

  const handleClick = () => {
    console.log('hoy me clickeo todo')
  }

  const dimeHola = () => {
    alert('hola')
  }
  const submit = () => {
    console.log("submit")
  }
  /** si el provider engloba algo todo lo que esta dentro lo puede utilizar, y si yo quiero que este valor se comparta con otros componentes, puedo hacerlo.
   * 
   * Si lo quiero usar el contexto desde que se fine el provider en el app no funcionaría?
   * no puedes usar el contexto desde el lugar que se define el provider
   * 
  */

  return (
    <GentlemanContext.Provider value={{ gentlemanContextValue, setGentlemanContextValue }}>
    <ColorRed><Button parentMethod={dimeHola}>My Boton Rojo</Button></ColorRed>
    <Button parentMethod={handleClick}>que onda</Button>

    <CustomForm />
    </GentlemanContext.Provider>
  )
}


export default App
