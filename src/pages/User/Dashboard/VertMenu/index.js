import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MdMoreVert } from 'react-icons/all';
import RoundImage from '~/components/Avatar';
import {
  Container,
  Badge,
  Products,
  Scroll,
  Product,
  BuyButton,
} from './styles';

export default function VertMenu() {
  const products = useSelector(state => state.cart.products);
  const [visible, setVisible] = useState(false);

  function handleVisibility() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleVisibility} visible={visible}>
        <MdMoreVert />
      </Badge>
    </Container>
  );
}
