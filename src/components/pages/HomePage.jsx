import Posst from './components/Posst'
import Navbars from './components/navbars' 
import CrearPost from './components/crearPost' 
import MiniInfo from './components/miniInfo'

export default function HomePage() {
  return (
    <div>
      <Navbars />
      <div>
     <MiniInfo />
      <CrearPost/>
      <Posst />
      </div>
    </div>
  )
}
