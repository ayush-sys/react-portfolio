import React from 'react';
import { DiCelluloid, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='technologies'>
  <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've worked with a range of technologies and have expreince in the domain of Web Developement & Machine Learning.</SectionText>
    <List>
      <ListItem>
        <DiReact size='4rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Expreince with <br />
          React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='4rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Expreince with <br />
          Node.js, Express.js & MongoDB.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCelluloid size='4rem' />
        <ListContainer>
          <ListTitle>Others</ListTitle>
          <ListParagraph>Expreince with <br />
          Machine Learning & Deep Learning
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
