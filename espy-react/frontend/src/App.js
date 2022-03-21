import React from 'react';
import './styles/style.css';
import Login from './components/Login';
import Register from './components/Register';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Movies from './pages/Movies';
import Shows from './pages/Shows';
import Details from './pages/Details';
function App() {
  return (
    <div className='main'>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/movies' element={<Movies></Movies>}></Route>
          <Route path='/shows' element={<Shows></Shows>}></Route>
          <Route path='/details/:id' element={<Details></Details>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
