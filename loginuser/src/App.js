
import './App.css';
import Home from './components/homepage/home';
import Login from './components/login/login';
import Register from './components/register/register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [user, setLoginUser] = useState({
   
  })
  return (
   
    <div className="App">
   <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
        user && user._id?
        <Home setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser}/>}/>
        <Route exact path='/login' element={
        <Login setLoginUser={setLoginUser}/>} />
        <Route exact path='/register' element={< Register />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
