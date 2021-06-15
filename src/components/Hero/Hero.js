import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Span } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello Guys <br />
        I'm Ayush Pattanayak
      </SectionTitle>
      <SectionText>
        Student, MERN developer & ML enthusiastic
      </SectionText>
      <Button>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;