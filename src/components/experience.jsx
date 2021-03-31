import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'

class Experience extends Component {

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

export default Experience;