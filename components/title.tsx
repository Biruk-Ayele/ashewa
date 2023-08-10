"use client"

import utilStyles from '../styles/utils.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

export default function Title() {
  return(
    <div className={`${utilStyles.title} ${utilStyles.titleDescription}`}>
    <Container fluid>
        <Row>
            <Col lg={6}><div>
                <h1>Lorem ipsum dolor sit amet, consectetur.</h1>
                <div className={utilStyles.signUpButton}>
                <Button variant="dark" size="lg">Sign-up</Button>
                </div>
                {/* <Button variant="outline-dark" size="lg">Download</Button> */}
            </div></Col>
        </Row>
    </Container>
    </div>
  )
}