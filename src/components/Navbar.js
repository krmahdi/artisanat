import React from 'react'
import {Link} from 'react-router-dom'
export const Navbar =()=>{
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">ATELIER DE CÉRAMIQUE</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item  ml-auto">
                <a class="nav-link active ms-3" aria-current="page" href="#">Accueil</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-2" href="#">Boutique</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">À propos</a>
              </li>
              <li class="nav-item">
                <Link to="signup" class="nav-link ms-2" >Signup</Link>
              </li>
              <li class="nav-item">
                <Link to="login" class="nav-link ms-2" >Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    )
}