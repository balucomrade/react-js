import{react, useState} from 'react'

export default (props)=>{
     //STATE OBJECT IMPLEMENTATION
    var [stateEmail,setStateEmail] = useState("balu@gmail.com");
    //state object changes
    let handleStateEmail=()=>
    {
        setStateEmail("virat@gmail.com"); 
    }
    return(<>
           <div class="container p-3">
                <h1>React Hooks UseState</h1>
                   
                    {stateEmail} <br></br>

                    <button onClick={handleStateEmail}>Update</button>
           </div>
    </>)
}