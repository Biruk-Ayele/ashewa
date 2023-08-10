"use client"

import utilStyles from '../styles/utils.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function HomeDescrition() {
  return (
    <main>
      <Container fluid>
        <Row>
          <Col>
            <h1 className={utilStyles.titleDescription2h1}><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit</strong></h1>
            <p className={utilStyles.titleDescription2p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi bibendum neque egestas. Purus non enim praesent elementum facilisis.</p>
          </Col>
        </Row>
      </Container>
    </main>
  )
}