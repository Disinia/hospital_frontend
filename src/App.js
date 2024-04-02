import logo from './logo.svg';
import './App.css';
import Appointment from './components/Appointment';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Search from './components/Search';
import Navbar from './components/Navbar';
import Lab from './components/Lab';
import Login from './components/Login';

function App() {
  return (
  <div>
<BrowserRouter>
<Routes>
<Route path='/login' element={<Login/>}></Route>
  <Route path='/register'element={<Register/>}></Route>
  <Route path='/lab' element={<Lab/>}></Route>
  <Route path='/appointment'element={<Appointment/>}></Route>
  <Route path='/search'element={<Search/>}></Route>
</Routes>
</BrowserRouter>
   </div>
  );
}

export default App;
