//routings.js ->module    http://localhost:3001/users
import React  from 'react'



//component nesting into routings
import Header from './MainMenu/header.js'
import Home from './MainMenu/home.js'
import About from './MainMenu/about.js'
import Services from './MainMenu/services.js'
import Contact from './MainMenu/contact.js'
import Footer from './MainMenu/footer.js'
import pagenotfound from './pagenotfound'
import Itservices from './MainMenu/itservices'

//class components
import myclass from './myclass.js'
import signup from './MainMenu/signup'
import lifecycle from './MainMenu/lifecycle.js'
import restapi from './MainMenu/restapi'
import view from './MainMenu/restapi/view'
import edit from './MainMenu/restapi/edit'
import ReactBootstrap from './MainMenu/ReactBootstrap'

import RRc from './MainMenu/ReactReduxConnection.js'
//react hooks 
import RHuseState from './MainMenu/useStateHooks.js'

import RHuseEffect from './MainMenu/useEffectHooks.js'

import pagination from './MainMenu/pagination.js'

import HooksUser from './HooksAPI/hooksUser'

import HooksView from './HooksAPI/hooksView'

import HooksEdit from './HooksAPI/hooksEdit'

import hooksSignup from './HooksAPI/hooksSignup'

import HooksRedux from './HooksRedux/HooksRedux.js'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';


//Routings setup
function Routings()
{
    return(<BrowserRouter>

    {/* nav bar links */}
    <Header/>
    {/* nav bar links */}


      
           <Switch>
            {/* default home component of the project */}
            <Route exact path="/" component={Home} />   

             <Route path="/home" component={Home} />

             <Route path="/about" component={About} />

            <Route path="/services" component={Services} />

            <Route path="/itservices" component={Itservices} />

            <Route path="/contact" component={Contact} />

            <Route path="/myclass" component={myclass} />
             {/* lifecycle */}
            <Route path="/lifecycle" component={lifecycle} />
             {/* restapi */}
             <Route exact path="/restapi" component={restapi} />
              {/* router with parameter */}
              <Route path="/restapi/view/:idno" component={view} />
              {/* router with parameter */}
              <Route path="/restapi/edit/:idno" component={edit} />
              {/* react boostrap */}
               <Route exact path="/rb" component={ReactBootstrap} /> 
            
              <Route path="/signup" component={signup} />
              <Route path="/RRc" component={RRc} />
              
              <Route path="/RHuseState" component={RHuseState} />
             
              <Route path="/RHuseEffect" component={RHuseEffect} />

              <Route path="/pagination" component={pagination} />

              <Route exact path="/hooksuser" component={HooksUser} />
              <Route path="/hooksuser/view/:idno" component={HooksView} />
              <Route path="/hooksuser/edit/:idno" component={HooksEdit} />
              <Route path="/hooksSignup" component={hooksSignup} />
              <Route path="/hooksredux" component={HooksRedux} />

            <Redirect to="/home"/>
            <Route component={pagenotfound} />
            </Switch>

           {/* nav bar links */}
                <Footer/>
            {/* nav bar links */} 
        </BrowserRouter>) 
}
export default Routings