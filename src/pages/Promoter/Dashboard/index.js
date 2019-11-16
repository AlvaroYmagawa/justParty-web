import React from 'react';

import { Container } from './styles';
import Header from '~/components/Promoter/Header';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <h1>Dashboard</h1>
      </Container>
    </>
  );
}
