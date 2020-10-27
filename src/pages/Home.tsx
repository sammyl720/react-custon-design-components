import React from 'react'
import Button from '../components/Button/Button'
import Card from '../components/Card/Card'
import Container from '../components/container/Container'
import FlexBox from '../components/FlexBox/FlexBox'
import Grid from '../components/Grid/Grid'
import GridItem from '../components/Grid/GridItem/GridItem'
import Hero from '../components/Hero/Hero'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <Container addClasses='py-2'>
      <Hero title='The Best In Catering' subText='Edam fondue mozzarella. Cheese slices cheese and wine chalk and cheese squirty cheese smelly cheese camembert de normandie emmental st. agur blue cheese.' imageUrl='imgs/meal1.png'>
        <Button color='primary' size='xl'><Link to='/pricing'>Menu <i className="fas fa-book-open" style={{ marginLeft: '16px'}}></i></Link></Button>
      </Hero>
    </Container>
  )
}

export default Home
