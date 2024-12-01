import { useState } from 'react'
import './App.css'
import { Button } from './components'
function App() {
  /**
   * useState es para crear un estado, son cosas que van estar ligados
   * a un componente
   * 
   * 
   * 
   * */
  //Un componente inteligente tiene un estado
  //Un estado es para guardar las variables componentes y estados
  //usado del estado de React
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Cesar')
  /**
   * 1.- cuando se monta un componente
   * 2.- cambio de estado
   * 
   * 
   */

  /**
   * Lo que comunmente usaremos hooks gancho en react
   */
 
  //batching ejecutar todo ajuntar esos cambios y lo anidara
  //y lo ejecutara en un solo render
  const countMore = () => {
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    //porque esto funciona? porque ejecuta un metodo de React
    /** esto hace esto (count) => count + 1 
     * (0) => 0 + 1 = 1
     * (1) => 1 + 1 = 2
     * (2) => 2 + 1 = 3
     * (3) => 3 + 1 = 4
     * (4) => 4 + 1 = 5
     * (5) => 5 + 1 = 6
     * (6) => 6 + 1 = 7
    */
  }
  return (
    <>
        <Button label={`Count is ${count}`} parentMethod={countMore}/>

    </>
  )
}

export default App
