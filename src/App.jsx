import './App.css'
import Posst from './components/posst/Posst'
import Navbars from './components/posst/navbars' 
import crearPost from './components/posst/crearPost' 


function App() {
  return (
    <div>
      <crearPost/>
      <Navbars />
      <Posst />
    </div>
  )
}

export default App
