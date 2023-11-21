import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';

//HOOKS
import { useState, useEffect} from 'react'
import { useAuthenticator } from './hooks/useAuthenticator';

//COMPONENTS
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { AuthProvider } from './components/context/AuthContext';

//PAGES
import Home from './pages/home/Home';
import About from './pages/about/About';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Dashboard from './pages/dashboard/Dashboard';
import CreatePost from './pages/createPost/CreatePost'

function App() {

  const [user, setUser] = useState(undefined);
  const {auth} = useAuthenticator();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }
  

  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <BrowserRouter>
        <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />}></Route>
              <Route path='/register' element={!user ? <Register /> : <Navigate to="/"/>}></Route>
              <Route path='dashboard' element={!user ? <Login /> : <Navigate to="/dashboard"/>}></Route>
              <Route path='createpost' element={!user ? <Login /> : <Navigate to="/createpost"/>}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
      
      
    </div>
  );
}

export default App;
