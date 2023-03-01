import React from 'react'
import { Navigate } from 'react-router-dom';
import  useAuth  from '../hooks/useAuth'


function RequireAuth({children}:{children:React.ReactNode}) {
    const { auth }  = useAuth();
    console.log('auth',auth);
    console.log(!(auth.name && auth.password && auth.id))
    if(!(auth.name && auth.password && auth.id)){
        return<Navigate to={"/"}/>
    }
  return (
  <>
    {children}
    </>
  )
}

export default RequireAuth