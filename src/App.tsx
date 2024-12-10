import './App.css'
import { Modal } from './components'
import { useModalContext } from './components/organisms/Modal/context'
function App() {
  const { setState} = useModalContext()

  const openModal = () => {
    setState(true)
  }
  return (
      <>
        <Modal>
          <h2>Hola evzoda</h2>
          <h3>exc</h3>
        </Modal>
        <button
        className='close-button'
        onClick={openModal}>Manifiestate</button>
      </>
  )
}


export default App
