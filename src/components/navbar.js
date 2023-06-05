import React from "react";
import { TfiHome} from "react-icons/tfi";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {GiShop} from "react-icons/gi"
import { ImProfile,ImPhone,ImNewspaper } from "react-icons/im";
import { Link } from "react-router-dom";


function Navbar(){

    return(
        <div>
            <nav class="navbar navbar-expand-lg fixed-top navbar-scroll">
        <div class="container">
          <img src="https://mdbootstrap.com/img/Photos/new-templates/animal-shelter/logo.png" height="70" alt=""
            loading="lazy" />
            <h2 id="prodhead">PetISam</h2>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarExample01"
            aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon d-flex justify-content-start align-items-center">

      </span>
    </button>
    <div class="collapse navbar-collapse navbar11" id="navbarExample01">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 navbaricons">
        <li class="nav-item active">
          <Link to="/" class="navbarbut"><TfiHome/></Link>
        </li>
        <li class="nav-item">
          <Link to="/News" class="navbarbut"><ImNewspaper/></Link>
        </li>
        <li class="nav-item">
          <Link to="/Categories" class="navbarbut"><GiShop/></Link> 
        </li>
        <li class="nav-item">
          <Link to="/Foundation" class="navbarbut">Foundation</Link>
        </li>
        <li class="nav-item">
          <Link to="#" class="navbarbut">Education</Link>
        </li>
        <li class="nav-item">
          <Link to="/Aboutus" class="navbarbut">About us</Link>
        </li>
        <li class="nav-item" >
          <Link to='/Products' class="navbarbut">Products</Link>
        </li>
        <li class="nav-item" >
          <Link to="/ContactUs" class="navbarbut"><ImPhone/></Link>
        </li>
        <li class="nav-item">
          <Link to='/Cart' class="navbarbut"><ShoppingCartIcon/></Link>
        </li>
        <li class="nav-item">
          <Link to="/Employees" class="navbarbut"><ImProfile /></Link>
        </li>
      </ul>

      <ul class="navbar-nav flex-row">

      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}
export default Navbar;