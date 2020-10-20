import React, {useEffect, useState } from 'react';
import Container from './components/container/Container'
import FlexBox from './components/FlexBox/FlexBox';
import Table from './components/Table/Table';
import { dataType, fetchUsers } from './api/users'
function App() {
  const [data, setData] = useState<dataType | null>(null)
  useEffect(() => {
    fetchUsers(setData)
  }, [])
  return (
    <Container fluid addClasses='classic'>
      <FlexBox
        alignItems='alignCenter'
        justifyContent='justifyCenter'
        direction='column'
      >
        {data && (
          <Table color='warning' headers={Object.keys(data[0])} data={data} />
        )}
      </FlexBox>
    </Container>
  );
}

export default App;
