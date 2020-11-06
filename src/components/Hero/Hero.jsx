import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import zoomInUp from 'react-animations/lib/zoom-in-up';
import zoomInDown from 'react-animations/lib/zoom-in-down';
import PortfolioContext from '../../context/context';

const bounceAnimation = keyframes`${zoomInUp}`;
const slideAnimation = keyframes`${zoomInDown}`;

const SlideL = styled.h1`
  animation: 8s ${slideAnimation};
`;

const ATag = styled.a`
  animation: 8s ${bounceAnimation};
`;

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <SlideL className="hero-title">
          {title || 'Hi, my name is'} <span className="text-color-main">{name || 'Your Name'}</span>
          <br />
          {subtitle || "I'm the Unknown Developer."}
        </SlideL>

        <p className="hero-cta">
          <ATag className="cta-btn cta-btn--hero" href="#about">
            {cta || 'Know more'}
          </ATag>
        </p>
      </Container>
    </section>
  );
};

export default Header;
