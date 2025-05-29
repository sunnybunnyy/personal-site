import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Col, Row } from 'react-bootstrap';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum, neque eu viverra gravida, neque mauris tempor sapien, sed vestibulum nulla ligula vel odio. Aliquam tristique pellentesque justo eget dictum. Morbi ultricies justo ut felis egestas, eget interdum elit laoreet. Vivamus ornare justo lacus, in porta nisi tempor ac. Duis ligula lectus, ullamcorper in erat in, mattis accumsan nibh. Ut id pharetra lacus, non pellentesque odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis maximus feugiat odio, at sodales elit dictum quis.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                // TODO: Add technology logos
                                <div className="item">
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <h5>Brand Identity</h5>
                                </div>
                                <div className="item">
                                    <h5>Logo Design</h5>
                                </div>
                                <div className="item">
                                    <h5>Web Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}