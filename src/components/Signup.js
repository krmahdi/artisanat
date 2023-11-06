import React,{useState} from 'react'
import { Link } from 'react-router-dom'
 export const Signup = () => {
    const[email,setEmail]=useState('');
    const[username,setUsername]=useState('');

    const[password,setPassword]=useState('');
    const[errorMsg,setErrorMsg]=useState('');
    const[successMsg,setSuccessMsg]=useState('');
const handleSignup =(e)=>{
    e.preventDefault();
    console.log(email,password,username);
}
    return (
        <div className='container'>
            <br></br>
            <br></br>
<h1>S'inscrire</h1>
<hr></hr>
 <form className='form-group' autoComplete='off' onSubmit={handleSignup}>
    <label>Votre Nom</label>
    <input  type="text" className='form-control' required onChange={(e)=>setUsername(e.target.value)} value={username}></input>
    <br></br>
    <label>Votre Email</label>
    <input  type="email" className='form-control' required onChange={(e)=>setEmail(e.target.value)} value={email}></input>
    <br></br>
    <label>Votre Mot De Passe</label>
    <input  type="password" className='form-control' required onChange={(e)=>setPassword(e.target.value)} value={password}></input>
    <br></br>
    <div className='btn-box'>
        <span> vous avez déja un compte 
            <Link to="/login"  > se connecter</Link>
        </span>
        <button className='btn btn-success btn-md'>s'inscrire</button>
    </div>
    </form>           
        </div>
    )
 }