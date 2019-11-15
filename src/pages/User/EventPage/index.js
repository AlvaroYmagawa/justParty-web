import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdRoom, MdTimer, MdStar, MdShoppingCart } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import api from '~/services/api';

import {
  Container,
  Tittle,
  FavoriteButton,
  Description,
  Promoter,
} from './styles';
import Header from '~/components/User/Header';
import Loading from '~/components/Loading';
import BannerImage from '~/components/Banner';
import PromoterImage from '~/components/Avatar';

export default function Event() {
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState(false);
  const { eventId } = useParams();

  const handleFavorite = async () => {
    if (favorite) {
      await api.delete(`/wishlists/${event.id}`);
      setFavorite(false);
    } else {
      await api.post('/wishlists', {
        event_id: event.id,
        date: new Date(),
      });
      setFavorite(true);
    }
  };

  useEffect(() => {
    async function loadEvent() {
      const response = await api.get(`events/${eventId}`);

      const data = {
        ...response.data,
        day: format(parseISO(response.data.date), 'dd', {
          locale: pt,
        }),
        mounth: format(parseISO(response.data.date), 'MMMM', {
          locale: pt,
        }),
        hours: format(parseISO(response.data.date), 'HH:mm', {
          locale: pt,
        }),
      };

      setEvent(data);
      setLoading(false);
    }

    async function loadWishList() {
      const response = await api.get(`/wishlists/${eventId}`);

      if (response) {
        setFavorite(true);
      }
    }

    loadEvent();
    loadWishList();
  }, [eventId]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header tittle={event.name} />
          <Container>
            <BannerImage src={event.banner.url} size={400} />
            <section>
              <Tittle>
                <div>
                  <div className="date">
                    <h3>{event.mounth}</h3>
                    <h2>{event.day}</h2>
                  </div>
                  <div>
                    <h1>{event.name}</h1>
                    <span>{event.description}</span>
                  </div>
                </div>

                <FavoriteButton favorite={favorite} onClick={handleFavorite}>
                  <FaHeart color="#fff" size={14} />
                  <p>Favoritar evento</p>
                </FavoriteButton>
              </Tittle>

              <Description>
                <ul className="details">
                  <li>
                    <MdTimer color="#777" size={20} />
                    <p>{`${event.day} de ${event.mounth} às ${event.hours}`}</p>
                  </li>
                  <li>
                    <MdRoom color="#777" size={20} />
                    {event.localization}
                  </li>
                </ul>

                <Promoter>
                  <h3>Organizado por</h3>
                  <Link to={`/users/${event.promoter.id}`}>
                    <div>
                      <PromoterImage src={event.promoter.File.url} size={60} />
                      <div>
                        <h4>{event.promoter.name}</h4>
                        <ul className="stars">
                          <li>
                            <MdStar color="#777" size={20} />
                          </li>
                          <li>
                            <MdStar color="#777" size={20} />
                          </li>
                          <li>
                            <MdStar color="#777" size={20} />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Link>
                </Promoter>
              </Description>
            </section>

            <div className="button">
              <button type="button">
                <MdShoppingCart color="#fff" size={20} />
                R$: 25,00
              </button>
            </div>
          </Container>
        </>
      )}
    </>
  );
}
