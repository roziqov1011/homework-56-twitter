import { createContext, useEffect, useState } from "react";

const Context = createContext()

const Provider = ( { children } )=>{
    const [token, setToken] = useState(JSON.parse(window.localStorage.getItem('token')))
    
    useEffect(()=>{
        if(token){
            window.localStorage.setItem('token', JSON.stringify(token));
        }else{
            window.localStorage.removeItem('token')
        }
    },[token])


    return <Context.Provider value={{token, setToken}}>{children}</Context.Provider>
}
export {
    Context,
    Provider
}