// import { createContext } from "react";
import { createContext, useEffect, useState } from "react";


const Context = createContext();

const Provider = ({children}) =>{
    const [theme, setTheme] = useState(window.localStorage.getItem("theme")|| 'light');

    useEffect(()=>{
        window.localStorage.setItem("theme", theme)
    },[theme])

    const obj = {
        theme,
        setTheme,
    }
    return <Context.Provider value = {obj}>{children}</Context.Provider>;
}
export {Context, Provider};