import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//COMPONENTS
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//PAGES
import Home from './pages/home/Home';
import About from './pages/about/About';
import Login from './pages/login/Login'
import Register from './pages/register/Register'

function App() {
  return (
    <div className="App">

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
      
    </div>
  );
}

export default App;
