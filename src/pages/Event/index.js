import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdRoom, MdTimer } from 'react-icons/md';
import api from '~/services/api';

import { Container, Tittle } from './styles';
import Header from '~/components/Header';
import Loading from '~/components/Loading';
import Image from '~/components/Banner';

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
          <Image src={event.banner.url} size={400} />
          <section>
            <Tittle>
              <div className="date">
                <h3>{event.mounth}</h3>
                <h2>{event.day}</h2>
              </div>
              <div>
                <h1>{event.name}</h1>
                <span>{event.description}</span>
              </div>
            </Tittle>

            <ul>
              <li>
                <MdTimer color="#777" size={20} />
                <p>{`${event.day} de ${event.mounth} às ${event.hours}`}</p>
              </li>
              <li>
                <MdRoom color="#777" size={20} />
                {event.localization}
              </li>
            </ul>
          </section>
        </Container>
      )}
    </>
  );
}
