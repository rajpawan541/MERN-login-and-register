import { useState } from "react"
import React from "react"
import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () =>{
    const navigate = useNavigate()
    const[user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterpass:""
    })
    const handleChange = e =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const register = () =>{
        const {name, email, password, reEnterpass} = user
        if(name && email && password && (password === reEnterpass)){
            axios.post("http://localhost:9002/register",user)
            .then(res=>{alert(res.data.message)
            navigate('/login')
            })
        }else{
            alert("invalid input")
        }
    }
    return(
        <div className="register">
            
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
            <input type="password" name="reEnterpass" value={user.reEnterpass} placeholder="Re-Enter your password" onChange={handleChange}></input>
            
            <div className="button" onClick={register}> Register</div>
            <div>Or</div>
            <div className="button" onClick={()=>navigate("/login")} >Login</div>
           
        </div>
    )
}

export default Register;