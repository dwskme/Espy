import React from 'react';
import './styles/style.css';
import Login from './components/Login';
import Register from './components/Register';
import NavBar from './components/NavBar';
function App() {
  return (
    <div>
      <NavBar/>
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
