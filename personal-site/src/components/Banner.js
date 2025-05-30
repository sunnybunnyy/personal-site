import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import {ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            return (
                <section className="banner" id="home">
                    <Container>
                        <Row className="align-items-center">
                            <Col xs={12} md={6} xl={7}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{`Hi I'm webcoded `}<span className="wrap">{text}</span></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum, neque eu viverra gravida, neque mauris tempor sapien, sed vestibulum nulla ligula vel odio. Aliquam tristique pellentesque justo eget dictum. Morbi ultricies justo ut felis egestas, eget interdum elit laoreet. Vivamus ornare justo lacus, in porta nisi tempor ac. Duis ligula lectus, ullamcorper in erat in, mattis accumsan nibh. Ut id pharetra lacus, non pellentesque odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis maximus feugiat odio, at sodales elit dictum quis.</p>
                                <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}></ArrowRightCircle></button>
                            </Col>
                            <Col xs={12} md={6} xl={5}>
                                <img src={headerImg} alt="Header Image" />
                            </Col>
                        </Row>
                    </Container>
                </section>
            )

        </section>
    )
}