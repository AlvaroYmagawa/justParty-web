import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiShoppingBag, MdAdd, MdRemove } from 'react-icons/all';
import { formatPrice } from '~/util/format';
import { updateCart } from '~/store/modules/cart/actions';
import RoundImage from '~/components/Avatar';
import colors from '~/styles/colors';
import {
  Container,
  Badge,
  Products,
  Scroll,
  Product,
  BuyButton,
  Total,
} from './styles';
import { ComfirmModal } from '~/components/Modals';

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.products);
  const [visible, setVisible] = useState(false);
  const [modal, setModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    function loadTotalPrice() {
      if (products.length > 0) {
        const newPrices = products.map(
          product => product.counter * product.price
        );
        const newTotal = newPrices.reduce((total, prices) => total + prices);
        setTotalPrice(formatPrice(newTotal));
      }
    }

    loadTotalPrice();
  }, [products]);

  function handleVisibility() {
    setVisible(!visible);
  }

  function handleTotalPrice(product) {
    const newPrice = product.price * product.counter;
    setTotalPrice(newPrice);
  }

  function handleUpdateCart(product, index, operation) {
    dispatch(updateCart(product, index, operation));
    handleTotalPrice(product);
  }

  return (
    <Container>
      <Badge onClick={handleVisibility} visible={visible}>
        <FiShoppingBag />
      </Badge>

      <Products visible={visible}>
        <h3>Meu Carrinho</h3>
        <Scroll>
          {products.map((product, index) => (
            <Product key={product.id} unread={!product.read}>
              <RoundImage
                src={product.banner.url}
                size={50}
                className="eventBanner"
              />
              <div className="productInfo">
                <div className="productInfoHeader">
                  <h4>{product.name}</h4>
                  {/* <span>
                    {format(parseISO(product.date), 'dd/MMMM/yy', {
                      locale: pt,
                    })}
                  </span> */}
                </div>

                <div className="productCounter">
                  <h4>{formatPrice(product.price * product.counter)}</h4>

                  <div className="productCounterButtons">
                    <button
                      type="button"
                      disabled={product.counter === 1}
                      onClick={() => handleUpdateCart(product, index, 0)}
                    >
                      <MdRemove
                        color={
                          product.counter === 1 ? colors.span : colors.accent
                        }
                      />
                    </button>

                    <span>{product.counter}</span>
                    <button
                      type="button"
                      onClick={() => handleUpdateCart(product, index, 1)}
                    >
                      <MdAdd color={colors.accent} />
                    </button>
                  </div>
                </div>
              </div>
            </Product>
          ))}
        </Scroll>
        <Total>{totalPrice === 0 ? '' : `Total: ${totalPrice}`}</Total>
        <BuyButton
          type="button"
          onClick={() => {
            setModal(!modal);
          }}
        >
          Comprar
        </BuyButton>
        <ComfirmModal
          tittle={`Deseja confirmar a compra de ${totalPrice}?`}
          visible={modal}
          func={() => {
            setModal(!modal);
          }}
        />
      </Products>
    </Container>
  );
}
