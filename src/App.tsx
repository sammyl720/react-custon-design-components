import React from 'react';
import Container from './components/container/Container'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AppBar from './components/AppBar/AppBar';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';

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
      </Container>
    </Router>
  );
}

export default App;
