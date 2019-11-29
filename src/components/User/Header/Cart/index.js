import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FiShoppingBag, MdAdd, MdRemove } from 'react-icons/all';
import RoundImage from '~/components/Avatar';
import {
  Container,
  Badge,
  Products,
  Scroll,
  Product,
  BuyButton,
} from './styles';

export default function Cart() {
  const products = useSelector(state => state.cart.products);
  const [visible, setVisible] = useState(false);

  function handleVisibility() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleVisibility} visible={visible}>
        <FiShoppingBag />
      </Badge>

      <Products visible={visible}>
        <h3>Meu Carrinho</h3>
        <Scroll>
          {products.map(product => (
            <Product key={product.id} unread={!product.read}>
              <RoundImage
                src={product.banner.url}
                size={50}
                className="eventBanner"
              />
              <div className="productInfo">
                <h4>{product.name}</h4>

                <div className="productCounter">
                  <MdRemove />
                  <span>1</span>
                  <MdAdd />
                </div>
              </div>
            </Product>
          ))}
        </Scroll>
        <BuyButton>Comprar</BuyButton>
      </Products>
    </Container>
  );
}
