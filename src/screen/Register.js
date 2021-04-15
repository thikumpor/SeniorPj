import React, { useState } from "react"
import "../App.css";
import {db} from "../firebase";

const Register = () => {
    const [name, setName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loader, setLoader] = useState(false);
    const handleSubmit =(e) => {
        e.preventDefault();
        setLoader(true)
        db.collection("Student")
        .add({
            name: name,
            lastName: lastName,
            email: email,
            password: password,
        })
        .then(()=> {alert(
            'Your account has been submiited');
             setLoader(false) 
           
    })
    .catch(error => {
        alert (error.message); 
        setLoader(true) 
    });
    setName("");
    setlastName("");
    setEmail("");
    setPassword("");
};

 return(
     <form className = "form" onSubmit={handleSubmit}>
        <h1><center>Register</center></h1>
        <label>Name</label>
        <input placeholder="Name"
        value = {name}
        onChange={(e)=> setName(e.target.value)}/>
        
        <label>Last Name</label>
        <input placeholder="Last Name"
        value = {lastName}
        onChange={(e)=> setlastName(e.target.value)}/>

        <label>Email</label>
        <input placeholder="Email"
        value = {email}
        onChange={(e)=> setEmail(e.target.value)}/>

        <label>Password</label>
        <input placeholder="Password" 
        value = {password}
        onChange={(e)=> setPassword(e.target.value)}/>

        <button type= "Submit" style={{  }} >Submit</button>
        </form>
 );
};

export default Register