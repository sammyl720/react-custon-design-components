import React from 'react'
import Card from '../components/Card/Card'
import Container from '../components/container/Container'
import Grid from '../components/Grid/Grid'
import GridItem from '../components/Grid/GridItem/GridItem'
import Table from '../components/Table/Table'

const Pricing = () => {
  return (
    <Container>
      <h3 className='my-4 slideInFromTop-800' style={{ textAlign: 'center', fontSize: '32px', lineHeight: '34px', fontWeight: 300}}>Our Pricing</h3>

        <Grid rows='5' cols='12' gap='sm'>
          <GridItem rowStart={1} rowEnd={7} colStart={0} colEnd={1} addClass='slideInFromLeft-800 primary' >
            <Card addClasses='p-4'>
              <div className="flex-control">
                <h3 className="hyperlink my-2">Group Packages</h3>
                <h3 className="hyperlink my-2">Business Package</h3>
                <h3 className="hyperlink my-2">Party Package</h3>
              </div>
            </Card>
          </GridItem>
          <GridItem rowStart={1} rowEnd={7} colStart={2} colEnd={13} addClass='slideInFromRight-800'>
            <Table headers={['Name', 'Details', 'Price']} data={[
              {
                name: 'The Starter Package',
                details: 'Cheese and biscuits emmental macaroni cheese. Cauliflower cheese babybel airedale cheese on toast ricotta cottage cheese cheesy grin bocconcini.',
                price: '$23.99'
              },
              {
                name: 'The Combo Package',
                details: 'Fondue cheese on toast camembert de normandie. Cheese slices roquefort emmental manchego chalk and cheese boursin cheese and biscuits cheese and biscuits',
                price: '$32.99'
              },
              {
                name: 'The Deluxe Package',
                details: 'Cheese strings brie brie macaroni cheese blue castello smelly cheese cauliflower cheese caerphilly. Fondue fondue blue castello halloumi who moved my cheese rubber cheese cheese strings red leicester. Fromage frais stilton.',
                price: '$44.99'
              }
            ]} />
          </GridItem>
        </Grid>
    </Container>
  )
}

export default Pricing
