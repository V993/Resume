import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Education extends Component {

   render() {
      return (
         <div>
            <Accordion defaultActiveKey="1"> 
               <Card>
                  <Card.Header>
                     <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <h1>Education</h1>
                     </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                     <Card.Body>
                        <h3>
                           i studied and stuff. trust me bro
                        </h3>
                        <h5>
                           just look at all this shit I've studied on god bruh
                        </h5>
                     </Card.Body>
                  </Accordion.Collapse>
               </Card>
            </Accordion>
         </div>
      )
   }

} // end Education

export default Education;

