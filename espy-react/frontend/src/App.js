import React from 'react';
import './styles/style.css';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Shows from './pages/Shows';
import Details from './pages/Details';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './pages/Profile';

function App() {
  return (
    <div className='main'>
      <ToastContainer></ToastContainer>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/movies' element={<Movies></Movies>}></Route>
          <Route path='/shows' element={<Shows></Shows>}></Route>
          <Route path='/details/:id' element={<Details></Details>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
