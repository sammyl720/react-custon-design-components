import React from 'react';
import Button from './components/Button/Button';
import Grid from './components/Grid/Grid';
import Input from './components/Input/Input'
import Container from './components/container/Container'
import Hero from './components/Hero/Hero';
function App() {
  return (
    <div>
      <Hero imageUrl='imgs/travel.png' title='A Getaway Next Door' subText='The classic latin passage that just never gets old, enjoy as much (or as little) lorem ipsum as you can handle with our easy to use filler text generator.'>
        <Button size='xl'>Discover</Button>
      </Hero>

    <Container>
      <h1 style={{ margin: '1rem auto'}}>Reserve Your Get a Way Today</h1>
      <Grid rows='3' cols='2' gap='lg'>
        <Grid cols='1' rows='3' gap='md'>
          <Input name='Name' placeholder='John Doe' color='success' />
          <Input name='Email' placeholder='JohnDoe@example.com' color='success' />
          <Button size='md' color='success'>Continue</Button>
        </Grid>
        <Grid cols='1' rows='3' gap='md'>
          <Input name='Address' placeholder='123 Main St' color='primary' />
          <Input name='City and State' placeholder='Main Town, DE' color='primary' />
          <Button size='md' color='primary'>Submit</Button>
        </Grid>
        <Grid cols='1' rows='3' gap='md'>
          <Input name='Name' placeholder='John Doe' color='secondary' />
          <Input name='Email' placeholder='JohnDoe@example.com' color='secondary' />
          <Button size='sm' color='secondary'>Submit</Button>
        </Grid>
        <Grid cols='1' rows='3' gap='md'>
          <Input name='Name' placeholder='John Doe' color='warning' />
          <Input name='Email' placeholder='JohnDoe@example.com' color='warning' />
          <Button size='sm' color='warning'>Submit</Button>
        </Grid>
        <Grid cols='1' rows='3' gap='md'>
          <Input name='Name' placeholder='John Doe' color='danger' />
          <Input name='Email' placeholder='JohnDoe@example.com' color='danger' />
          <Button size='sm' color='danger'>Submit</Button>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
}

export default App;
