import React,{Component} from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
export class App extends Component{
  render(){
    return(
     <BrowserRouter>
     <Routes>
      <Route  path="/" Component={Home}/>
      <Route  path="/signup" Component={Signup}/>
      <Route  path="/login" Component={Login}/>


     </Routes>
     </BrowserRouter>
    )
  }
}
export default App