import React from 'react';
import Button from './components/Button/Button';
import Grid from './components/Grid/Grid';
import Input from './components/Input/Input'
import Container from './components/container/Container'
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';
import GridItem from './components/Grid/GridItem/GridItem';
import CardFooter from './components/Card/CardFooter/CardFooter';
function App() {
  return (
    <Container addClasses='m-1 p-1'>

      <Grid rows='12' cols='10' gap='sm'>
        <GridItem rowStart={2} rowEnd={7} colStart={1} colEnd={7}>
          <Card bgImageUrl='imgs/latte3.png'>
            <CardFooter bottom={true}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum consequuntur nemo ea, id aliquid nam tempora asperiores optio magnam aut minus eius sunt. Sequi sit enim quas mollitia corrupti qui!</p>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem rowStart={2} rowEnd={5} colStart={8} colEnd={11}>
          <Card>
            <h1>Wind Down</h1>
            <p style={{ textAlign: 'center'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Saepe tempora numquam eos!</p>
          </Card>
        </GridItem>
        <GridItem rowStart={5} rowEnd={10} colStart={8} colEnd={11}>
          <Card bgImageUrl='imgs/latte1.png'>
            <CardFooter>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem rowStart={7} rowEnd={8} colStart={1} colEnd={7} >
          <Card>
          <h4>Welcome To latte Art</h4>

          </Card>
        </GridItem>
        <GridItem rowStart={8} rowEnd={13} colStart={1} colEnd={7}>
          <Card bgImageUrl='imgs/bo-leaf.png'>
            <CardFooter bottom={false}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
            </CardFooter>
          </Card>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default App;
