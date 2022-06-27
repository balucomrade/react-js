import React, { Component } from 'react'
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';

//global variable for restapi url
const url=`https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`

export default class RB extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = 
      {
          photos:[]
      }
    }
  
  
  
    render() {
      
      return (<>
      <div className="container text-center p-4">
         <h2 className="py-3">REACT BOOTSTRAP UI PACKAGE</h2>
     
         <Container>
<Row>

    {
        this.state.photos.map((res,i)=> {
            return(<Col lg={4} md={4} xs={12}>          
                <Card className="my-2">
                      <Card.Img variant="top" className="w-50 mx-auto my-2" src={res.thumbnailUrl} />
                      <Card.Body>
                          <Card.Title className="h6">{res.title}</Card.Title>                          
                          <a className="btn btn-primary" href={res.url} target="_blank">Visit Site</a>
                      </Card.Body>
                  </Card>
              </Col>)
        })
    }
</Row>
</Container>

      </div>
      </> )
  }

  componentDidMount()
  {
      axios.get(url).then((result)=> this.setState({photos:result.data}));
  }

}
