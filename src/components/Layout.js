import React from 'react'

import Accolades from './accolades'
import Education from './education'
import Experience from './experience'
import Interests from './interests'
import Skills from './skills'
import Navigation from './Navigation'

import Container from 'react-bootstrap/container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Layout = ({children}) => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <img src='images/Profile.jpg'></img>
                </Col>
                <Col>
                    <h1>Leonardo Matone</h1>
                    <h3>Professional moron</h3>
                </Col>
                <Col l>
                    <h3>V99352@gmail.com</h3> 
                </Col>
            </Row>
            <Row></Row>
            <Education />
            <Experience />
            <Skills />
            <Interests />
            <Accolades />
            {children}
        </Container>
    )
}

export default Layout