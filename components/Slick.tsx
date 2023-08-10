"use client"

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from 'react-bootstrap/Container';
import Image from "next/image";
import utilStyles from '../styles/utils.module.css';
import Link from "next/link";
import Button from 'react-bootstrap/esm/Button';

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: 30 }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: 30, zIndex: 1 }}
            onClick={onClick}
        />
    );
}
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            autoplay: true,
            autoplaySpeed: 5000,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Container>
                <div>
                    <h2> Multiple Products </h2>
                    <Slider {...settings}>
                        <Link href="/shose">
                            <div className={utilStyles.slickItem}>
                                <Image
                                    src="/images/F1fHZWZaYAQLzQq.jpg"
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                />
                            </div>
                        </Link>
                        <Link href={"/shose/kids"}>
                            <div className={utilStyles.slickItem}>
                                <Image
                                    src="/images/F1fHZWZaYAQLzQq.jpg"
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                />
                            </div>
                        </Link>
                        <div className={utilStyles.slickItem}>
                            <Image
                                src="/images/F1fHZWZaYAQLzQq.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className={utilStyles.slickItem}>
                            <Image
                                src="/images/F1fHZWZaYAQLzQq.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className={utilStyles.slickItem}>
                            <Image
                                src="/images/F1fHZWZaYAQLzQq.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className={utilStyles.slickItem}>
                            <Image
                                src="/images/F1fHZWZaYAQLzQq.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className={utilStyles.slickItem}>
                            <Image
                                src="/images/F1fHZWZaYAQLzQq.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className={utilStyles.slickItem}>
                            <Image
                                src="/images/F1fHZWZaYAQLzQq.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                        </div>
                    </Slider>
                </div>
            </Container>
        );
    }
}