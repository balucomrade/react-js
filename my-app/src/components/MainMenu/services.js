//services.js ->module
import React from 'react'
import { faPerson } from '@fortawesome/free-solid-svg-icons'


//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {facircleb } from '@fortawesome/free-solid-svg-icons'

//import external local json file data
import ServiceData from './../../assets/json/services.json'


var bgc={backgroundColor:`#12151c`}
//create services component
function Services()
{
    return(<>
            <div className="container-fluid" style={{bgc}}>
             <div className="container p-5 text-center">
                 <h1 className="pt-2 pb-5 text white">SERVICES</h1>
                 <div className="row">

                       {
                           ServiceData.map((data,i)=>{
                               return(<div className="col-lg-4">
                               
                               <div className="card text-center text-white p-2" style={bgc}>
                                  <p className="text-center">
                                      <span classname="id_span" style={{fontSize:"30px",fontWeight:"700"}}>{data.url}</span>
                                   {/* <FontAwesomeIcon icon={""} size="3px" className="fw-bold text-success" />  */}
                                  {/* <span className="icon_box" style={{width:'40px'}}> <i class="fa-solid fa-person"></i></span> */}
                                  </p>
                                 
                                  <div className="card-body">
                                      <h3 className="py-3">{data.title}</h3>
                                      <p className="text-justify">{data.discription}</p>
                                  </div>
                               </div> 
       
                               </div>)
                           })
                       }

                     {/* <div className="col-lg-4">
                        <div className="card text-center text-white p-2" style={bgc}>
                           <p className="text-center">
                           {/* <FontAwesomeIcon icon={faCoffee} size="3px" className="fw-bold text-success" /> */}
                          {/* <span className="icon_box" style={{width:'40px'}}> <i class="fa-solid fa-person"></i></span>
                           </p>
                          
                           <div className="card-body">
                               <h3 className="py-3">UI/DESINGING</h3>
                               <p className="text-justify">Computer graphics deals with generating images with the aid of computers. Today, computer graphics is a core technology in digital photography, film, video games, cell phone and computer displays, and many specialized applications. A great deal of specialized hardware and software has been developed, with the displays of most devices being driven by computer graphics hardware. It is a vast and recently developed area of computer science.</p>
                           </div>
                        </div> 

                     </div>  */}

                     {/* <div className="col-lg-4">
                        <div className="card text-center text-white p-2" style={bgc}>
                          <i className="fas fa-snowboarding text-success text-weight-bold"></i>
                           <div className="card-body">
                               <h3 className="py-3">MARKETING</h3>
                               <p className="text-justify">Computer graphics deals with generating images with the aid of computers. Today, computer graphics is a core technology in digital photography, film, video games, cell phone and computer displays, and many specialized applications. A great deal of specialized hardware and software has been developed, with the displays of most devices being driven by computer graphics hardware. It is a vast and recently developed area of computer science.</p>
                           </div>
                        </div> 

                     </div> */}

                     {/* <div className="col-lg-4">
                        <div className="card text-center text-white p-2" style={bgc}>
                          <i className="fas fa-snowboarding text-success text-weight-bold"></i>
                           <div className="card-body">
                               <h3 className="py-3">BRANDING</h3>
                               <p className="text-justify">Computer graphics deals with generating images with the aid of computers. Today, computer graphics is a core technology in digital photography, film, video games, cell phone and computer displays, and many specialized applications. A great deal of specialized hardware and software has been developed, with the displays of most devices being driven by computer graphics hardware. It is a vast and recently developed area of computer science.</p>
                           </div>
                        </div> 

                     </div> */}

                 </div>

             </div>
            </div>

        </>)
}
export default Services