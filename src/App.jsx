import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Pokemones from './components/Pokemones'
import Login from './components/Login';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import { auth } from './firebase';

function App() {

  const [firebaseUser, setFirebaseUser] = useState(false);

  useEffect(() => {

      const fetchUser = () => {
          auth.onAuthStateChanged(user => {
              if (user) {
                setFirebaseUser(user)
              } else {
                setFirebaseUser(null)
              }
          })
      }

      fetchUser()

  }, []);

  const privateRoute = () => {

    if(localStorage.getItem('user')) {
      const userStorage = JSON.parse(localStorage.getItem('user'))
      if(userStorage.uid === firebaseUser.uid) {
        return <Route path="/" element={<Pokemones />} />
      }else {
        return <Navigate to='/login' />
      }
    } else {
      return <Navigate to='/login' />
    }
  }
  
  

  return firebaseUser !== false ? (
    <Router>

      <div className="container mt-3">
        <Navbar />
        <Routes>

          <Route path="/" element={<Pokemones />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </div>

    </Router>
  ) : (
    <div>Cargando...</div>
  )
}

export default App;
