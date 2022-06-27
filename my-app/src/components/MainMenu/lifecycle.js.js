import React, { Component } from 'react'

 class lifecycle extends Component {

//constructor is mounting method
constructor(props)
{
  super(props);
  this.state={}
  console.log(`*******constructor is mounting method*******`)

}
// componentWillMount()
// {
//   console.log(`*******constructor is mounting method*******`)



  //render is mounting method
  render() {
    console.log(`*******render is mounting method*******`)
    return (<>
      <div className="p-5 text-center">
          <h1>REACT CLASS COMPONENT LIFE CYCLE PROCESS</h1>
      </div>
      </>)
  }

  componentDidMount()
{
  console.log(`*******constructor is mounting method*******`)
}
}

export default lifecycle
