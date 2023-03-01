import React,{useState} from 'react';
import Navigationbar from './components/Navigationbar';
import Faq from './components/Faq';
import Auth from './pages/Auth';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import { Route, Routes, Navigate } from 'react-router-dom';
import QuestionForm from './components/QuestionForm';
import { FormData } from './types';
import Dashboard from './components/Dashboard';
import RequireAuth from './components/RequireAuth';



const formData: FormData = {
  username: '',
  questions: []
}
function App() {
  const [data, setData] = useState(formData);

  
  return (
    <>
      <Navigationbar />
      <Routes>
        <Route path='/' element={<Navigate to="/register" replace/>} />
        <Route path='/register' element={<Auth><RegistrationForm data={data} setData={setData} /></Auth>} />
        <Route path='/questions' element={<QuestionForm data={data} setData={setData} />} />
        <Route path='/login' element={<Auth><LoginForm /></Auth>} />
        <Route path='/user/:id' element={<RequireAuth> <Dashboard/></RequireAuth>} />
      </Routes>
      <Faq />
    </>
  );
}

export default App;
