import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdShoppingCart } from 'react-icons/md';
import api from '~/services/api';

import Header from '~/components/Header';
import Image from '~/components/Banner';

import { Container, EventList, Description } from './styles';

export default function Dashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function loadEvents() {
      const response = await api.get('events');

      const data = response.data.map(event => ({
        ...event,
        day: format(parseISO(event.date), 'dd', {
          locale: pt,
        }),
        mounth: format(parseISO(event.date), 'MMMM', {
          locale: pt,
        }),
        hours: format(parseISO(event.date), 'HH:mm', {
          locale: pt,
        }),
      }));

      setEvents(data);
    }

    loadEvents();
  }, []);

  return (
    <>
      <Header tittle="DASHBOARD" />
      <Container>
        <h1>Eventos</h1>
        <EventList>
          {events.map(
            event =>
              !event.past && (
                <li key={event.id}>
                  <Link to={`/events/${event.id}`}>
                    <Image src={event.banner.url} size={300} />
                  </Link>
                  <Description>
                    <section>
                      <div className="date">
                        <h3>{event.mounth}</h3>
                        <h2>{event.day}</h2>
                      </div>
                      <tr />
                      <div className="description">
                        <h3>{event.name}</h3>
                        <span>
                          Organizado por
                          <Link to={`/users/${event.promoter.id}`}>
                            {event.promoter.name}
                          </Link>
                        </span>
                      </div>
                    </section>

                    <button type="button">
                      <MdShoppingCart size={15} color="#fff" />
                      R$: 25,00
                    </button>
                  </Description>
                </li>
              )
          )}
        </EventList>
      </Container>
    </>
  );
}
