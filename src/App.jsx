import { Route , Routes } from "react-router-dom"
import HomePage from './components/pages/HomePage'
import Notfound from './components/pages/Notfound'
import Ajuste from './components/pages/Ajuste'

function App() {
  return (
    <Routes>
      <Route></Route>
      <Route path="/home" element={<HomePage />} />
      <Route path="#" element={<Notfound />} />
      <Route path="/ajustes" element={<Ajuste />} />
    </Routes>
  )
}

export default App
