import React,{setState} from 'react'

//global variable
var  phone=8096556812;
class myclass extends React.Component{

    
    //constructor
    constructor(props){
        super(props);

        //step-1 state object
        this.state=
        {
            email:`balu@gmail.com`,
            phone:8096556812
        }

    }
    stateChanges=()=>{
    this.setState({
       
            email:'balu@gmail.com',
            phone:7989333239 
         
    })
    
}

//prepare the component input
render()
{
    
    return (<>
    <div className="container p-5">

     <h1>REACT CLASS COMPONENT & STATE & EVENTS</h1>

     <p>Email is:{this.state.email}</p>
     <button onClick={()=>this.setState({email:'virat@gmail..com'})}>Change My Email</button>

     <br/><br/>

     <p>Phone is:{this.state.phone}</p>
     <button onClick={()=>this.setState({phone:'7989333239'})}>Change My Phone</button>
    
     <br/><br/>

     <button onClick={()=>this.stateChanges()}>Update All state property</button>

    </div>
    </>);
}
}
export default myclass 