import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import UserNav from './components/Navbar/UserNav';

function App() {
  return (
    <div>
      <Navbar> </Navbar>
      <UserNav> </UserNav>
      <Routes>
        <Route path='home' element={<Home> </Home>}> </Route>
        <Route path='login' element={<Login> </Login>}>  </Route>
      </Routes>
    </div>
  );
}

export default App;
