"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import shoses from './shose';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';



function GridCard(props: any) {
  return (
    <Row xs={2} md={3} lg={5} className="g-4">
      {shoses.map((shose) => (
        <Col key={shose.id}>
          <Card>
            <Card.Img variant="top" src={shose.imgURL} />
            <Card.Body className={utilStyles.cardBody}>
              <Card.Text className={utilStyles.cardText}>{shose.shoseTitle.substring(0, 48)}...</Card.Text>
              <Card.Text><strong>{shose.price}</strong></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridCard;

