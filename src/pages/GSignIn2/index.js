import React from 'react';
import { Container } from './styles';

export default function GSignIn2() {
  return (
    <Container
      className="g-signin2"
      data-width="auto"
      data-longtitle="true"
      data-onsuccess="onSignIn"
    />
  );
}
