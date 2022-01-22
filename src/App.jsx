import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pokemones from './components/Pokemones'
import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>

        <div className="container mt-3">
          <Navbar />
          <Routes>

            <Route path="/" element={ <Pokemones /> } />
            <Route path="/login" element={ <Login /> } />

          </Routes>
        </div>

    </Router>
  );
}

export default App;
