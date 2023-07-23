"use client"

import utilStyles from '../styles/utils.module.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image'


export default function NewCarousel() {
    return (
        <Container fluid className={utilStyles.carousel}>
            <h1 style={{ marginBottom: '30px', color: '#116D6E' }}>Products</h1>
            <Row xs={2}>
                <Col lg={3}>
                    <Carousel slide={false}>
                        <Carousel.Item>
                            <Image
                                src="/images/F1FGGXAXwAAioWn.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                src="/images/F1FGGXAXwAAioWn.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                src="/images/F1FGGXAXwAAioWn.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <Carousel slide={false} className={utilStyles.carousel_1_2}>
                        <Carousel.Item>
                            <Image
                                src="/images/F1fTpu6akAA3c9x.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                src="/images/F1fTpu6akAA3c9x.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />                       
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                src="/images/F1fTpu6akAA3c9x.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />                         
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col lg={3}>
                    <Carousel slide={false}>
                        <Carousel.Item>
                            <h3>Most Popular</h3>
                            <Image
                                src="/images/F1fRBrwaYAISqaH.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <h3>Most Popular</h3>
                            <Image
                                src="/images/F1fRBrwaYAISqaH.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />                         
                        </Carousel.Item>
                        <Carousel.Item>
                            <h3>Most Popular</h3>
                            <Image
                                src="/images/F1fRBrwaYAISqaH.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />                         
                        </Carousel.Item>
                    </Carousel>

                </Col>
                <Col lg={3}>
                    <Carousel slide={false}>
                        <Carousel.Item>
                            <h3>New Items</h3>
                            <p>Added to collection</p>
                            <Image
                                src="/images/F1fRBrwaYAISqaH.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <h3>New Items</h3>
                            <p>Added to collection</p>
                            <Image
                                src="/images/F1fRBrwaYAISqaH.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />                         
                        </Carousel.Item>
                        <Carousel.Item>
                            <h3>New Items</h3>
                            <p>Added to collection</p>
                            <Image
                                src="/images/F1fRBrwaYAISqaH.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />                         
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col lg={3}>
                    <Carousel slide={false}>
                        <Carousel.Item>
                            <Image
                                src="/images/F1fTpu6akAA3c9x.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />                        
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                src="/images/F1fTpu6akAA3c9x.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />                        
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                src="/images/F1fTpu6akAA3c9x.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />                        
                        </Carousel.Item>
                    </Carousel>
                    <Carousel slide={false} className={utilStyles.carousel_1_2}>
                        <Carousel.Item>
                            <Image
                                src="/images/F1FGGXAXwAAioWn.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />                        
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                src="/images/F1FGGXAXwAAioWn.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />                        
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                src="/images/F1FGGXAXwAAioWn.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />                        
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}