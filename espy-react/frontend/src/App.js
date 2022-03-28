import React from 'react';
import './styles/style.css';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Shows from './pages/Shows';
import Details from './pages/Details';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './pages/Profile';
import { UserProvider } from './utils/userContext';
import WatchLater from './pages/WatchLater';
import RatedMovies from './pages/RatedMovies';

function App() {
  // localStorage.clear();
  const token = localStorage.getItem('token');
  return (
    <UserProvider>
      <div className='main'>
        <ToastContainer></ToastContainer>
        <Router>
          <Routes>

            {
              // localStorage.clear()
              token !== null ?
                <>
                  <Route path='/' element={<Home></Home>}></Route>
                  <Route path='/watch-later' element={<WatchLater></WatchLater>}></Route>
                  <Route path='/rated-movies' element={<RatedMovies></RatedMovies>}></Route>
                  <Route path='/movies' element={<Movies></Movies>}></Route>
                  <Route path='/shows' element={<Shows></Shows>}></Route>
                  <Route path='/details/:id' element={<Details></Details>}></Route>
                  <Route path='/profile' element={<Profile></Profile>}></Route>
                </> :
                <>
                  <Route path='/' element={<Login></Login>}></Route>
                  <Route path='/register' element={<Register></Register>}></Route>
                </>
            }
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
