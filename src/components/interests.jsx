import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Interests extends Component {

render() {
  return (
   <div> 
      <Accordion>
         <Card>
            <Card.Header>
               <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  <h1>Experience</h1>
               </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
               <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
         </Card>
      </Accordion>
   </div>
  )
 }
}

export default Interests;