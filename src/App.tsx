import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import Container from './components/container/Container'
import axios from 'axios'
import { Child, Welcome } from './Reddit';
import Grid from './components/Grid/Grid';
import FlexBox from './components/FlexBox/FlexBox';
import CardFooter from './components/Card/CardFooter/CardFooter';
import Pill from './components/Pill/Pill';
function App() {
  
  return (
    <div style={{width:'100%', height: '100%'}}>
        <Container fluid addClasses='primary'>
          <FlexBox direction='row' alignItems='alignCenter' justifyContent='justifyCenter'>
              <h1 style={{ fontSize: 72, fontWeight: 200 }}>Hello World!</h1>
              <Pill color='classic'>Primary</Pill>
          </FlexBox>
        </Container>
          <Container fluid addClasses='success'>
          <FlexBox direction='row' alignItems='alignCenter' justifyContent='justifyCenter'>
              <h1 style={{ fontSize: 72, fontWeight: 200 }}>Hello World!</h1>
              <Pill color='primary'>success</Pill>
          </FlexBox>
        </Container>
          <Container fluid addClasses='classic'>
          <FlexBox direction='row' alignItems='alignCenter' justifyContent='justifyCenter'>
              <h1 style={{ fontSize: 72, fontWeight: 200 }}>Hello World!</h1>
              <Pill color='secondary'>Classic</Pill>
          </FlexBox>
        </Container>
        <Container fluid addClasses='secondary'>
          <FlexBox direction='row' alignItems='alignCenter' justifyContent='justifyCenter'>
              <h1 style={{ fontSize: 72, fontWeight: 200 }}>Hello World!</h1>
              <Pill color='classic'>Secondary</Pill>
          </FlexBox>
        </Container>
        <Container fluid addClasses='warning'>
          <FlexBox direction='row' alignItems='alignCenter' justifyContent='justifyCenter'>
              <h1 style={{ fontSize: 72, fontWeight: 200 }}>Hello World!</h1>
              <Pill color='danger'>Warning</Pill>
          </FlexBox>
        </Container>
          <Container fluid addClasses='danger'>
          <FlexBox direction='row' alignItems='alignCenter' justifyContent='justifyCenter'>
              <h1 style={{ fontSize: 72, fontWeight: 200 }}>Hello World!</h1>
              <Pill color='warning'>Danger</Pill>
          </FlexBox>
        </Container>
    </div>
  );
}

export default App;
