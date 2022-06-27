import React, { Component } from 'react'

//step1
import {connect} from 'react-redux';
//step-3
import emp from '../../actions/EmpAction.js' //external data-restapi

import useraction from '../../actions/UsersAction'
import studentaction from '../../actions/StudentsAction'
//step-4
import { bindActionCreators } from 'redux';

class ReactReduxConnection extends Component
{
   constructor(props) 
   {
     super(props);
   
     this.state = {}
   }

   componentDidMount()
   {
    this.props.emp();
    this.props.useraction();
    this.props.studentaction();
   }

    render() 
  {
    return (<>
    <div className="container py-2">
       <h2 className="text-center">ReactReduxConnection</h2>
     
       <h3>synchronous data from redux_actionc</h3>
     {
        this.props.empdata.map((res,i)=>
        {
            return(<ul key={i}>
                <li>{res.id}</li>
                <li>{res.name}</li>
                <li>{res.email}</li>
            </ul>)
        })
     }

<h3>Asynchronous data-1[global restapi] from redux_actionc</h3>
     {
        this.props.userdata.map((res,i)=>
        {
            return(<ul key={i}>
                <li>{res.id}</li>
                <li>{res.name}</li>
                <li>{res.email}</li>
            </ul>)
        })
     }

<h3>Asynchronous data-2[local restapi] from redux_actionc</h3>
     {
        this.props.studentdata.map((res,i)=>
        {
            return(<ul key={i}>
                <li>{res.id}</li>
                <li>{res.name}</li>
                <li>{res.email}</li>
            </ul>)
        })
     }
   
    </div>
   
    </>)
  }
}
//step-6
const mapStateToProps=(state)=>{
    //get the data from the redux store by using reducers
   console.log(state)
    return({
    empdata:state.empReducer,
    userdata: state.userReducer,
    studentdata:state.studentReducer
}) 
}

//step-5
const mapDispatchToProps=(Dispatch)=>{
    //calling redux actions
    return bindActionCreators({emp,useraction,studentaction},Dispatch) 
}

//export default ReactReduxConnection
//step-2
export default connect(mapStateToProps,mapDispatchToProps)(ReactReduxConnection)