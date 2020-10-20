import React, { useEffect } from 'react';
import Card from './components/Card/Card';
import Container from './components/container/Container'
import FlexBox from './components/FlexBox/FlexBox';
import Modal from './components/Modal/Modal';
import Pill from './components/Pill/Pill';
function App() {
  const modalRef = React.createRef<HTMLDivElement>()
  useEffect(() => {
    modalRef.current!.style.display = 'none'
  }, [modalRef])
  return (
    <Container addClasses='m-1 p-1'>
      <Modal ref={modalRef}>
        <Card>
        <h1>This is a Modal</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           Qui sapiente magni quia deleniti dicta nulla repellendus 
           atque hic eaque asperiores accusamus nihil perferendis laudantium,
          id sequi corrupti dolor quam perspiciatis.</p>
        </Card>
      </Modal>
      <FlexBox 
        direction='row'
        alignItems='alignCenter' 
        justifyContent='justifyCenter'
      >
        <h1 onClick={() => {
          modalRef.current!.style.display = 'block'
        }} style={{ fontWeight: 300, fontSize: 72 }}>Hello World!</h1>
        <Pill color='primary'>Water</Pill>
        <Pill color='secondary'>Soda</Pill>
        <Pill color='warning'>Gatorade</Pill>
        <Pill color='danger'>Powerade</Pill>
      </FlexBox>
    </Container>
  );
}

export default App;
