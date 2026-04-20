import Post from '../Post'
import Navbars from '../navbars' 
import CrearPost from '../crearPost' 
import MiniInfo from '../miniInfo'

export default function HomePage() {
  return (
    <div>
      <Navbars />
      <div>
        <MiniInfo />
        <CrearPost/>
        <Post />
      </div>
    </div>
  )
}
