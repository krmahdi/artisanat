import React,{useState} from 'react'
import { Link } from 'react-router-dom'
export const Login = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[errorMsg,setErrorMsg]=useState('');
    const[successMsg,setSuccessMsg]=useState('');
const hnadleLogin =(e)=>{
    e.preventDefault();
    console.log(email,password);
}
   return (
    <div className='container'>
            <br></br>
            <br></br>
<h1>Se connecter</h1>
<hr></hr>
 <form className='form-group' autoComplete="off" onSubmit={hnadleLogin}>
   
    <label>Votre Email</label>
    <input  type="email" className='form-control' required onChange={(e)=>setEmail(e.target.value)} value={email}></input>
    <br></br>
    <label>Votre Mot De Passe</label>
    <input  type="password" className='form-control' required onChange={(e)=>setPassword(e.target.value)} value={password}></input>
    <br></br>
    <div className='btn-box'>
        <span> vous n'avez pas un compte 
            <Link to="/signup"  > s'inscrire</Link>
        </span>
        <button className='btn btn-success btn-md'>Se connecter</button>
    </div>
    </form>           
        </div>
   )
}