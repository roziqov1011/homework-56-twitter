import { useContext } from "react";
import { Context } from "../Context/AuthContext";

const useAuth = (setterOnly)=>{
    const {token, setToken} = useContext(Context)
    return setterOnly ? [token, setToken]: [token]
}
export default useAuth;