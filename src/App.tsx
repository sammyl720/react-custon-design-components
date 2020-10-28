import React from 'react';
import Container from './components/container/Container'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AppBar from './components/AppBar/AppBar';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';
import FlexBox from './components/FlexBox/FlexBox';

const List= () =>  {
  return (
    <ul>
      <li><Link className='hyperlink' to='/'>Home</Link></li>
      <li><Link className='hyperlink' to='/pricing'>Pricing</Link></li>
      <li><Link className='hyperlink' to='/about'>About</Link></li>
    </ul>
  )
}
function App() {
  return (
    <Router>
      <Container fluid>
        <AppBar color='primary' Logo='imgs/logos/logo1.png' Links={List} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/pricing' component={Pricing} />
          <Route path='/about' component={About} />
        </Switch>
        <FlexBox alignItems='alignCenter' justifyContent='justifyBetween' direction='row' addClasses='px-4 py-2 primary'>
          <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>&copy; C&amp;Co 2020</span>
          <div>
            <i style={{ margin: '0 5px', cursor: 'pointer'}} className="fab fa-facebook fa-2x"></i>
            <i style={{ margin: '0 5px', cursor: 'pointer'}} className="fab fa-instagram fa-2x"></i>
            <i style={{ margin: '0 5px', cursor: 'pointer'}} className="fab fa-twitter fa-2x"></i>
          </div>
        </FlexBox>
      </Container>
    </Router>
  );
}

export default App;
