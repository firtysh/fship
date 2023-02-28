import React from 'react';
import Navigationbar from './components/Navigationbar';
import Faq from './components/Faq';
import Auth from './pages/Auth';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Navigationbar />
      <Routes>
        <Route  path='/' element={<Navigate to="/register" replace/>} />
        <Route path='/register' element={<Auth><RegistrationForm /></Auth>} />
        <Route path='/login' element={<Auth><LoginForm /></Auth>} />
      </Routes>
      <Faq />
    </>
  );
}

export default App;
