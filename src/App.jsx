import { Route , Routes , Navigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import HomePage from './components/pages/HomePage'
import Notfound from './components/pages/Notfound'
import Ajuste from './components/pages/Ajuste'
import Loginpage from './components/pages/Loginpage'
import Registrar from "./components/pages/registrar"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === "true");
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
    localStorage.setItem('userName', userName);
  }, [isAuthenticated, userName]);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUserName(userData?.nombre || '');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserName('');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userName');
  };

  return (
    <Routes>
      <Route path="/home" element={isAuthenticated ? <HomePage user={userName} onlogout={handleLogout} /> : <Navigate to="/login"/>} />
      <Route path="#" element={<Notfound />} />
      <Route path="/ajustes" element={isAuthenticated ? <Navigate to="/home"/> : <Ajuste />} />
      <Route path="/login" element={isAuthenticated ? <Navigate to="/home"/> : <Loginpage onLogin={handleLogin}/>} />
      <Route path="/register" element={isAuthenticated ? <Navigate to="/home"/> : <Registrar onLogin={handleLogin}/>} />
      <Route path="*" element={<Loginpage onLogin={handleLogin}/>} />
    </Routes>
  ) 
}

export default App
