import React, {useEffect, useState } from 'react';
import Container from './components/container/Container'
import FlexBox from './components/FlexBox/FlexBox';
import Table from './components/Table/Table';
import { dataType, fetchUsers } from './api/users'
import Grid from './components/Grid/Grid';
import AppBar from './components/AppBar/AppBar';

const List= () =>  {
  return (
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
    </ul>
  )
}
function App() {
  const [data, setData] = useState<dataType | null>(null)
  useEffect(() => {
    fetchUsers(setData)
  }, [])
  return (
    <Container fluid>
      <AppBar color='danger' Logo='imgs/logos/logo1.png' Links={List} />
    </Container>
  );
}

export default App;
