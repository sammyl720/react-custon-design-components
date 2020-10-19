import React from 'react';
import Button from './components/Button/Button';
import Grid from './components/Grid/Grid';
import Input from './components/Input/Input'
import Container from './components/container/Container'
function App() {
  return (
    <Container>
      <Grid rows='3' cols='2' gap='lg'>
        <Grid cols='1' rows='3' gap='md'>
          <Input name='Name' placeholder='John Doe' color='success' />
          <Input name='Email' placeholder='JohnDoe@example.com' color='success' />
          <Button size='sm' color='success'>Submit</Button>
        </Grid>
        <Grid cols='1' rows='3' gap='md'>
          <Input name='Name' placeholder='John Doe' color='primary' />
          <Input name='Email' placeholder='JohnDoe@example.com' color='primary' />
          <Button size='sm' color='primary'>Submit</Button>
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
  );
}

export default App;
