import React from "react"
import { useState } from "react";
import "./login.css"
import axios from "axios";
import {useNavigate} from "react-router-dom"


const Login = ({setLoginUser}) =>{
    const navigate = useNavigate();
    const[user, setUser] = useState({
        email:"",
        password:"",
    })
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser(values => ({...values, [name]: value}))
      }
      const login=()=>{
        axios.post("http://localhost:9002/login",user)
        .then(res =>{
            alert(res.data.message)
            setLoginUser(res.data.user)
            navigate("/")
      
        })  }

    return(
        <div className="login">
            {console.log(user)}
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange}></input>
            <div className="button" onClick={login}>Login</div>
            <div>Or</div>
            <div className="button" onClick={()=>navigate("/register")}> Register</div>
        </div>
    )
}

export default Login;