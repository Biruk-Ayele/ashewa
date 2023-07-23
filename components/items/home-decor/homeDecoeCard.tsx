"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Link from 'next/link';
import homedecors from './homeDecor';

function HomeDecorCard() {
  return (
    <Row xs={2} md={3} lg={5} className="g-4">
      {homedecors.map((homedecor) => (
        <Col key={homedecor.id}>
          <Card>
            <Card.Img variant="top" src={homedecor.imgURL} />
            <Card.Body>
              <Card.Title>{homedecor.shoseTitle}</Card.Title>
              <p>zepana.com</p>
              <p>{homedecor.price}</p>
              <Card.Text>
              {homedecor.descriptionText.substring(0, 10)} ... <Link href={"#"}>see more</Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default HomeDecorCard;

