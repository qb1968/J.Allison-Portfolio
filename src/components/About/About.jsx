import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Where do I begin? I am a 52 year father of four wonderful daughters and five beautiful grandchildren. Yes very proud and yes have my hands full. Music has always been my life and always thought I would have a career in it. To this day I still run my own DJ business. But, after one dead end job after another I found something else I was just as passionate about and that was computers. '}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'I began to teach myself how they work and what makes them tick by taking them apart and building them. Also started to clean them of viruses and wiping hard drives, the standard stuff. Then I wanted to learn about websites and that lead me to where I am today.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    "With the support of the world's greatest wife and family I decided to embark on a remarkable journey and further my education at Lambda School. I began that journey in October of 2019 as a Full Stack Web Developer and have never been more proud of myself. Once again proving you are never too old to chase your dreams."}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
