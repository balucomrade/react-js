//Header.js component module
import React from 'react'
import { Link , NavLink } from 'react-router-dom';
 function Header() {
  var MenuNames=["Home","About","Services","Itservices","Contact",
  "Myclass","Lifecycle","RestApi","RB","SignUp","RRc",
  "RHuseState","RHuseEffect","pagination","Hooksuser","hooksSignup","HooksRedux"]

  return ( <>

<nav class="navbar navbar-expand-lg navbar-light"
 style={
      {
        backgroundColor:'#475562',
        borderBottom:'0.5px white solid',
        borderTop:'0.5px white solid'
        
      }
}>
   
  <div className="container-fluid">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
     
      {/* <ul className="navbar-nav">
        <li className="nav-item">
        <NavLink activeStyle={{backgroundColor:'black'}} className="nav-link text-white" activeClassName="text-white bg-dark" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink activeStyle={{backgroundColor:'black'}} className="nav-link text-white" activeClassName="text-white bg-dark" to="/about">About</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink activeStyle={{backgroundColor:'black'}} className="nav-link text-white" activeClassName="text-white bg-dark" to="/services">Services</NavLink>
        </li>
        <li classNames="nav-item">
          <NavLink activeStyle={{backgroundColor:'black'}} className="nav-link text-white" activeClassName="bg-dark" to="/contact">Contact</NavLink>
        </li>
      </ul> */}
      
      <ul className="navbar-nav">
        {
          MenuNames.map((data, i)=> 
          <li classNames="nav-item " key={i}>
            
              <NavLink activeClassName="bg-dark"
              className="nav-link text-white"  
              to={`/${data.toLowerCase()}`}>
                {data}
              </NavLink>
           </li>)
         }
        </ul>

    </div>
  </div>
</nav>

       {/* <Link to="/home">Home</Link>&nbsp;&nbsp;
       <Link to="/about">About</Link>&nbsp;&nbsp;
       <Link to="/services">Services</Link>&nbsp;&nbsp;
       <Link to="/contact">Contact</Link>&nbsp;&nbsp; */}

    </>
  )
}
export default Header;
