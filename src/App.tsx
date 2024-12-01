import './App.css'
import { useFetch } from './hooks'

interface Data {
  name: string;
  lastName: string;
  age: number;
}
// User Ejemplo
function App() {
  const url = ("https://api.example.com/data")

  const { data, error, loading } = useFetch<Data>(url)
  //const { data: DataUser, error: errorUser, loading: loadingUser } = useFetch<Data>(url)

  /**
   * 
   * la magia data.age data.name data.lastName
   * solito ya sabemos que es de tipo Data
   * y esta tipado
   */

  if (loading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>UPS! Hay un error: {error.message}</div>
  }

  return (
    <div>{JSON.stringify(data)}</div>
  )
}


export default App
