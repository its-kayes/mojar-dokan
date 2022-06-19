import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import UserNav from './components/Navbar/UserNav';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer';
import Register from './components/Register/Register';
import Food from './components/Food/Food';

function App() {
  return (
    <div>
      <Navbar> </Navbar>
      {/* <UserNav> </UserNav> */}
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/food' element={<Food> </Food>}> </Route>
        <Route path='/login' element={<Login> </Login>}>  </Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer> </Footer>
    </div>
  );
}

export default App;
