import { useContext } from "react";
import { Context } from "../Context/ThemeContext";

const useTheme= ()=>{
    const {theme, setTheme} = useContext(Context);
    return [theme, setTheme];
}
export default useTheme;