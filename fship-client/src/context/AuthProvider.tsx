import { createContext,useState } from "react";
import  { loadAll}  from 'react-cookies';
const { name, id, isLoggedIn, password}= loadAll();
const AuthContext = createContext<any |null>({ name, id, isLoggedIn, password});
export const AuthProvider = ({ children }:{children:React.ReactNode}) => {
    const [auth, setAuth] = useState({ name, id, isLoggedIn, password});   
    return(
        <AuthContext.Provider value={{auth,setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;