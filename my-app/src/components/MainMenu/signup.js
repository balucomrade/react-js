import React, { Component } from 'react'

import axios from 'axios'
const url=`http://localhost:3001/users`
export default class signup extends Component {
 
 constructor(props) {
   super(props)
 
   this.state = 
   {
      name:'',
      email:'',
      phone:'',
      txtConformation:''

   }
 }

 //name input text box
 nameHandling = (e)=>
 {
    this.setState({ name:e.target.value})
 }

  //email input text box
  emailHandling = (e)=>
  {
     this.setState({ email:e.target.value})
  }

   //phone input text box
 phoneHandling = (e)=>
 {
    this.setState({ phone:e.target.value})
 }

 submitHandler =(e) =>
 {
   e.preventDefault();

   var formData=
   {
     'name':this.state.name,
     'email':this.state.email,
     'phone':this.state.phone
   }
  //  alert(formData);
  //  axios.post(url,formData)
  //  .then(()=>window.alert("...CREATED..."))
  //  .catch(()=>window.alert("ERROR"));

    //  alert(url,formData);
    //     axios.post(url,formData)
    //   .then(()=>this.setState({ txtConformation:'Account Created'}))
    //   .catch(()=>this.setState({ txtConformation:'Account Failed'}));


     // alert(formData);
      axios.post(url,formData)
      .then(()=>{
        window.alert("...CREATED...");
        this.props.history.push('/restapi')
      });
      

 }
 
    render() {
      console.log(this.props)
      //destructuring
     var { name, email, phone, txtConformation } = this.state
    return (<>
      <div className="container p-5">
          <h3 className="text-center">User Registration</h3>
       
        <div className="container w-50">
        <form onSubmit={this.submitHandler.bind(this)}>

         <div class="mb-3">
            <label className="form-label">Name</label>
             <input type="text" class="form-control"
              value={name} 
              onChange={this.nameHandling.bind(this)} />
              <p>{name}</p>
         </div>

         <div class="mb-3">
            <label className="form-label">Email</label>
             <input type="email" class="form-control" 
              value={email} 
              onChange={this.emailHandling.bind(this)} />
              <p>{email}</p>
         </div>

         <div class="mb-3">
            <label className="form-label">Phone</label>
             <input type="number" class="form-control"
              value={phone} 
              onChange={this.phoneHandling.bind(this)} />
              <p>{phone}</p>
         </div>

         <div class="mb-3">
             <button type="submit" class="btn btn-primary">CREATE ACCOUNT</button>
         </div>
            
            <p class="text-primary">{txtConformation}</p>
         </form>

         </div>
       
        </div>
        </>)
  }
}
