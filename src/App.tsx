import { useEffect, useState } from 'react'
import './App.css'


function App() {

  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const consoleLoader = (loadingValue: boolean) => {
    setLoading(loadingValue)
    console.info(loadingValue)
  }
  const fetchData = async() => {
    consoleLoader(true)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      
    if(!response.ok){
        throw new Error('Error al obtener los datos')
      }
      
      const jsonData = await response.json()
      //setear el estado vuelve ejecutar el setData de nuevo
      //se crea un bucle infinito
      setData(jsonData)
    } catch (error) {
      setError(error as string)
    } finally {//lo que hace es ejecutar sin importar como traiga el trigger
      consoleLoader(false)
    }
  }
  /*** comunicarnos con el seridor - entidad externa al componente */
  /** siempre que tenga un Use es un Hook, engancha el estado del componente
   * lo crea y no lo destruye
   * nos permite controlar el ciclo de vida del componente
   * useEffect es un hook que al final acepta otro método
   * Esto tambien acepta un array de dependencias
   * por que manda un metodo?
   * logica ? que logica ? cuando se ejecuta esta logica? 
   */
  //** se maneja realmente el re render de un componente */
  /** 1/ esto se ejecuta cuando el componente 
   * 2 - cada vez que se modifique uno de los valores del state
  */

  //Operaciones Asíncronas
  //Paramétros de Entrada (eso viene de un cambio del padre)
  //Trabajas  con un context (dependiendo lo que queramos hacer)

  useEffect(() => {
    // es posible un bucle infinito?
    // si con esto si
    fetchData()
/**const a = {
  "name": "Juan",
}

//la forma de correcta de leerlo es 

/**const b = {
  "name": "Juan",
} */

//se crea una referencia (a) a un espacio de memoria lo que esta '>=' el
//el cual tiene un objeto name: Juan
//se crea una referencia (b) a un espacio de memoria lo que esta '>=' el


//a === b //false 


//no son igual por el espacio de memoria
  // SYNC CO ENTIDADES EXTERNAS
  //cada vez que el variable cambie ese array se ejecuta
  //pero si lo dejas vacio es repeligroso, no poner el arreglo de dependencias
  //cualquier valor del estado se ejecutara el efecto
  //cualquiera que cambie del nombre de estos state cuando tengas multiples state
  // no es una buena practica
  // eso dentro del metodo poner un return () que tambien es un metodo
  /// se va ejecutar cada vez que se desmonte es decir nunca...
  // lo usaria para cerrar browser o cositas nada mas
  // esto se usa para liberar memorias recursos
  // manejar el estado de la memoria
 
    fetchData()
}, [])
//   ¡¡¡ USEEFFECT PARA EL USO DE SYNC ENTIDADES EXTERNAS  !!!
//useEffect(() => { console.info(isLoading)}, [isLoading])


if(isLoading) {
  return (
  <div>
    Cargando...
  </div>
  )
}

if(error){
  return  (  
  <div>
    Upps hay un error: {error}
  </div>)

}


return (
  <div>
    {JSON.stringify(data)}
  </div>
)//data no es necesario ponerlo en el arreglo de dependencias
//cuando poner algo aca dentro ? porque es un metodo si el metodo cambia de 
//alguna manera? se puede hacer un retriger si cambia el metodo
//Si la respuesta es exactamente igual ,no deberia pasar nada (depende de la logica)

/**
 * Se puede usar más de un useEffect?
 * Si, pero cuando componente se monta y desmonta
 * 
 */
}

export default App
