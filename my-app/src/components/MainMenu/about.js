//about.js ->module
import React from 'react'

//profile photo
// import profile from '../../../public/assets/images/virat.jpg'

var h={height:'20px'}

//create about component
function About()
{
    return(<>
            <div className="container-fluid" style={{backgroundColor:'#12151c'}}>
                <div className="container p-5 w-75 text-center">
                    <h1 className="display-4 text-white fw-bold py-3">ABOUT US</h1>
                    <p className="text-white pb-3">
                       Computer graphics deals with generating images with the aid of computers. Today, computer graphics is a core technology in digital photography, film, video games, cell phone and computer displays, and many specialized applications. A great deal of specialized hardware and software has been developed, with the displays of most devices being driven by computer graphics hardware. It is a vast and recently developed area of computer science.
                    </p>
                  
                  <div className="jumbotron text-white p-5" style={{borderradius:'10px',backgroundColor:'#475562'}}>
                      <div className="row">
                          <div className="col-lg-6">
                              <div className="container w-100" >
                                  
                                  <table className="table table-borderless text-white">
                                     <tbody>
                                         <tr>
                                             <th></th>
                                             <td>
                                                 {/* <img src={profile} style={{borderRadius:'20px',width:'35%',height:'60px'}} />  */}
                                                 <img src="assets/images/virat.jpg"  style={{borderRadius:'20px',width:'40%',height:'60px'}}/>
                                                                                          
                                             </td>
                                         </tr>

                                         <tr>
                                             <th>FULLNAME</th>
                                             <td>DEAR COMRADE</td>
                                         </tr>
                                         <tr>
                                             <th>Birthday</th>
                                             <td>07/11/1995</td>
                                         </tr>
                                         <tr>
                                             <th>Email id </th>
                                             <td>balu@gmail.com</td>
                                         </tr>
                                     </tbody>
                                  </table>

                              </div>

                          </div>
                               <div className="col-lg-6">
                                   <h4>SKILLS</h4>
                                    <p className="text-left">HTML & CSS3</p>
                                    <div className="progress" style={h}>
                                    <div className="progress-bar bg-success" style={{width:'95%'}}>95%</div>
                                </div>  

                                        <p className="text-left">BOOTSTRAP5</p>
                                        <div className="progress" style={h}>
                                        <div className="progress-bar bg-success" style={{width:'90%'}}>90%</div>
                                </div>  

                    
                                        <p className="text-left">JAVASCRIPT & JQUERY</p>
                                        <div className="progress" style={h}>
                                        <div className="progress-bar bg-success" style={{width:'85%'}}>85%</div>
                                </div>  

                                        <p className="text-left">REACT JS</p>
                                        <div className="progress" style={h}>
                                        <div className="progress-bar bg-success" style={{width:'78%'}}>78%</div>
                                </div>  

                            </div>
                      </div>
                  </div>
                </div>
            </div>
        </>)
}
export default About