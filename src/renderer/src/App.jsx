// import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import Calculator from './components/Calculator'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
     <Calculator/>
    </>
  )
}

export default App

