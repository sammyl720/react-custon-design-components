import React from 'react';
import Container from './components/container/Container'
import FlexBox from './components/FlexBox/FlexBox';
import Pill from './components/Pill/Pill';
function App() {
  return (
    <Container addClasses='m-1 p-1'>

      <FlexBox 
        direction='column'
        alignItems='alignCenter' 
        justifyContent='justifyCenter'
      >
        <h1 style={{ fontWeight: 300, fontSize: 72 }}>Hello World!</h1>
        <Pill color='primary'>Water</Pill>
        <Pill color='secondary'>Soda</Pill>
        <Pill color='warning'>Gatorade</Pill>
        <Pill color='danger'>Powerade</Pill>
      </FlexBox>
    </Container>
  );
}

export default App;
