import React from 'react'
import { Navigate } from 'react-router-dom';
import  useAuth  from '../hooks/useAuth'


function RequireAuth({children}:{children:React.ReactNode}) {
    const { auth }  = useAuth();
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