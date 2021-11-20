import "./Login.css"

import Logo from "../../assets/images/twitter-logo.svg"

import {useRef} from "react";
import { useHistory } from "react-router";

import useAuth from "../../hooks/useAuth";

const Login = () => {
    const history = useHistory()
    const [,setToken] = useAuth(true)
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleLogin = (evt) => {
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then(res => res.json())
            .then(data => {if(data.token){
                history.push("/");
                setToken(data);
            }else{
                setToken(null);
                emailRef.current.style.border = "2px solid red"
            }
        } )

        evt.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    return ( 
        <>
       

        <div className="inner__container light">
            <div className="login-container">
                 <img src={Logo} alt="" />
        <h2 className="title-login">Log in to Twitter</h2>
        <form onSubmit = {handleLogin} >
        <input className="input" ref ={emailRef}
        type = "email"
        placeholder = "username"
        required defaultValue = "eve.holt@reqres.in" />
        <input className="input" ref = {passwordRef}
        type = "password"
        placeholder = "password"
        required defaultValue = "cityslicka" />
        <button type = "submit" className="login-btn" > Login </button>
        </form>
        <div className="sub-form">
            <span>Forgot password?</span>
            <span>Forgot password?</span>
        </div>
            </div>
        </div>
        </>
    )
}
export default Login;