import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';

import RoundImage from '~/components/Avatar';
import { Container, WishList, Wish, Scroll, Badge } from './styles';
import colors from '~/styles/colors';

export default function FavoriteButton() {
  const [wishList, setWishList] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    async function loadWishList() {
      const response = await api.get('/wishlists');

      const data = response.data.map(wish => ({
        ...wish,
        timeDistance: formatDistance(
          parseISO(wish.Event.sales_date),
          new Date(),
          {
            addSuffix: true,
            locale: pt,
          }
        ),
      }));

      setWishList(data);
    }

    loadWishList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleVisibility() {
    setVisible(!visible);
    console.tron.log(wishList);
  }

  return (
    <Container>
      <Badge type="button" onClick={handleVisibility} visible={visible}>
        <FaHeart color={visible ? colors.accent : colors.text} />
      </Badge>

      <WishList visible={visible}>
        {wishList.map(wish => (
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
                    As vendas começam
                    <strong> {wish.timeDistance}</strong>
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
