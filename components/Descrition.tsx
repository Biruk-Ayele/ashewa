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
            <h1 className={utilStyles.titleDescription2h1}><strong>በተመረጡ ጥቅማጥቅሞች የንግድ ልምድዎን ያብጁ!</strong></h1>
            <p className={utilStyles.titleDescription2p}>Grow and succeed with curated benefits offered by Ashewa.com, whether you are a startup business needing the essentials to start sourcing or a well-established enterprise looking for tools and services for more complex orders.</p>
          </Col>
        </Row>
      </Container>
    </main>
  )
}