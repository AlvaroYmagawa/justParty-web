import React from 'react';
import { Container } from './styles';
import Header from '~/components/Header';

export default function Dashboard() {
  return (
    <>
      <Header tittle="DASHBOARD" />
      <Container>
        <h1>Dashboard</h1>
      </Container>
    </>
  );
}
