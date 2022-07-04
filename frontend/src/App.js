import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/style.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Shows from './pages/Shows';
import Details from './pages/Details';
import { ToastContainer } from 'react-toastify';
import Profile from './pages/Profile';
import { UserContext, UserProvider } from './utils/userContext';
import WatchLater from './pages/WatchLater';
import RatedMovies from './pages/RatedMovies';
import UserManagement from './pages/admin/UserManagement';
import { MovieProvider } from './utils/movieContext';
import { RecProvider } from './utils/RecContext';
import Recommended from './pages/Recommended';
import ForgotPassword from './pages/passwordreset/ForgotPassword';
import ResetPassword from './pages/passwordreset/ResetPassword';

function App() {
  // localStorage.clear();
  const token = localStorage.getItem('token');

  return (
    <UserProvider>
      <RecProvider>
        <MovieProvider>
          <div className='main'>
            <ToastContainer></ToastContainer>
            <Router>
              <Routes>
                {
                  //  If the token is Null then it means there is no user currently logged in so it will redirect to Login/ Register page else it will take to home page..
                  token !== null ?
                    <>
                      <Route path='/admin' element={<UserManagement></UserManagement>}></Route>
                      <Route path='/' element={<Home></Home>}></Route>
                      <Route path='/watch-later' element={<WatchLater></WatchLater>}></Route>
                      <Route path='/rated-movies' element={<RatedMovies></RatedMovies>}></Route>
                      <Route path='/movies' element={<Movies></Movies>}></Route>
                      <Route path='/shows' element={<Shows></Shows>}></Route>
                      <Route path='/recommended' element={<Recommended></Recommended>}></Route>
                      <Route path='/details/:type/:id' element={<Details></Details>}></Route>
                      <Route path='/profile' element={<Profile></Profile>}></Route>
                    </> :
                    <>
                      <Route path='/' element={<Login></Login>}></Route>
                      <Route path='/forgot-password' element={<ForgotPassword></ForgotPassword>}></Route>
                      <Route path='/reset-password/:token' element={<ResetPassword></ResetPassword>}></Route>
                      <Route path='/register' element={<Register></Register>}></Route>
                    </>
                }
              </Routes>
            </Router>
          </div>
        </MovieProvider>
      </RecProvider>
    </UserProvider>
  );
}

export default App;
