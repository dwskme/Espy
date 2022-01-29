import './styles/style.css';
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  return (
    //wrapping in fragment
    <>
      <LoginButton />
      <LogoutButton />
    </>
  );
}

export default App;
