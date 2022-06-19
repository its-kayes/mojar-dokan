import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import UserNav from './components/Navbar/UserNav';
import Home from './components/Home/Home';
import Register from './components/Register/Register';

function App() {
  return (
    <div>
      <Navbar> </Navbar>
      <UserNav> </UserNav>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='login' element={<Login> </Login>}>  </Route>
        <Route path='register' element={<Register></Register>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
