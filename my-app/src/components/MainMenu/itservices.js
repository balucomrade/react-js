import React from 'react'
//nested routings
import Webapplication from './It-services/webapplication';
import Mobileapplication from './It-services/mobileapplication';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

var service=[
    {
        title:'Webapplication',
        routeName:'/web-app'
    },
    
    {
        title:'Mobileapplication',
        routeName:'/mobile-app'
    },

    {
        title:'design application',
        routeName:'/design-app'
    },

    {
        title:'Project support services',
        routeName:'/project-app'
    }
]

 function Itservices() {
  return (<><BrowserRouter>
          <h1>IT SERVICES</h1>
          <p>
          Information technology service management (ITSM) are the activities that are performed by an organization to design, build, deliver, operate and control information technology
          IT services refers to the application of business and technical expertise to enable organizations in the creation, management and optimization of or access to information and business processes. The IT services market can be segmented by the type of skills that are employed to deliver the service

          </p>

          <div className="conatiner my-5">
              <div className="row">

                <div className="col-lg-3">
                {/* <ul class="list-group">

                    <li class="list-group-item">
                       <Link to="/itservices/web-app">Web application</Link> 
                    </li>

                    <li class="list-group-item">
                       <Link to="/itservices/mobile-app">mobile application</Link> 
                    </li>

                    <li class="list-group-item">
                       <Link to="/itservices/design-app">design application</Link> 
                    </li>

                    <li class="list-group-item">
                       <Link to="/itservices/project-app">project support services</Link> 
                    </li>
                    

                </ul> */}

           <ul class="list-group">
                {
                    service.map((data,i)=>
                    {
                        return(<li class="list-group-item">
                            <Link to={`/itservices${data.routeName}`}>
                                {data.title}
                            </Link>
                        </li>)
                    })
                }

            </ul>

                </div> 

                <div className="col-lg-9">
                    {/* nested router */}

                      
                          <Switch>
                              
                              <Route path="/itservices/web-app" component={Webapplication} />
                              <Route path="/itservices/mobile-app" component={Mobileapplication} />
                              <Route path="/itservices/design-app" render={()=><h1>this is design services</h1>} />
                              <Route path="/itservices/project-app" render={()=><h1>this is project support services</h1>} />

                          </Switch>
                      
                </div>   
              </div>

          </div>
          </BrowserRouter>
        </>)
}
export default Itservices;
