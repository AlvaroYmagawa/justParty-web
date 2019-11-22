import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { loadWishlistRequest } from '~/store/modules/wishlist/actions';

import RoundImage from '~/components/Avatar';
import { Container, WishList, Wish, Scroll, Badge } from './styles';
import colors from '~/styles/colors';

export default function FavoriteButton() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const wishlist = useSelector(state => state.wishlist.wishlist);

  async function handleVisibility() {
    await dispatch(loadWishlistRequest());
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge type="button" onClick={handleVisibility} visible={visible}>
        <FaHeart color={visible ? colors.accent : colors.text} />
      </Badge>

      <WishList visible={visible}>
        {wishlist.map(wish => (
          <Scroll>
            <Link to={`/events/${wish.Event.id}`}>
              <Wish key={wish.id} unread={!wish.read}>
                <RoundImage
                  src={wish.Event.banner.url}
                  size={50}
                  className="eventBanner"
                />
                <div className="wishInfo">
                  <h4>{wish.Event.name}</h4>
                  <span>
                    <strong>
                      {formatDistance(
                        parseISO(wish.Event.sales_date),
                        new Date(),
                        {
                          // addSuffix: true,
                          locale: pt,
                        }
                      )}
                    </strong>
                    para o ínicio das vendas
                  </span>
                </div>
              </Wish>
            </Link>
          </Scroll>
        ))}
      </WishList>
    </Container>
  );
}
