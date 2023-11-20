import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';

//HOOKS
import { useState, useEffect} from 'react'
import { useAuthenticator } from './hooks/useAuthenticator';

//COMPONENTS
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AuthProvider } from './components/context/AuthContext';

//PAGES
import Home from './pages/home/Home';
import About from './pages/about/About';
import Login from './pages/login/Login'
import Register from './pages/register/Register'

function App() {

  const [user, setUser] = useState(undefined);
  const {auth} = useAuthenticator();

  const loadingUser = user === undefined;

  if (loadingUser) {
    return <p>Carregando...</p>
  }


  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
      
      
    </div>
  );
}

export default App;
