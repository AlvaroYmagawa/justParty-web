import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import {
  MdRoom,
  MdTimer,
  MdStar,
  MdShoppingCart,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from 'react-icons/md';

import { FaHeart } from 'react-icons/fa';
import api from '~/services/api';

import colors from '~/styles/colors';
import { Container, Tittle, Description, Promoter } from './styles';
import Header from '~/components/Header';
import Loading from '~/components/Loading';
import BannerImage from '~/components/Banner';
import PromoterImage from '~/components/Avatar';

export default function Event() {
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);
  const { eventId } = useParams();

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

    loadEvent();
  }, [eventId]);
  return (
    <>
      <Header tittle={event.name} />
      {loading ? (
        <Loading />
      ) : (
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

              <button type="button">
                <FaHeart color="#fff" size={14} />
                <p>Favoritar evento</p>
              </button>
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

          {/* <div className="buttons">
            <button type="button">
              <MdRemoveCircleOutline color={colors.primary} size={32} />
            </button>
            Comprar
            <button type="button">
              <MdAddCircleOutline color={colors.primary} size={32} />
            </button>
          </div> */}

          <div className="button">
            <button type="button">
              <MdShoppingCart color="#fff" size={20} />
              R$: 25,00
            </button>
          </div>
        </Container>
      )}
    </>
  );
}
