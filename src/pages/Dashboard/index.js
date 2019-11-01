import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import api from '~/services/api';

import { Container, Event, Description } from './styles';
import Header from '~/components/Header';

export default function Dashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function loadEvents() {
      const response = await api.get('events');
      setEvents(response.data);
    }

    loadEvents();
  }, []);

  return (
    <>
      <Header tittle="DASHBOARD" />
      <Container>
        <ul>
          {events.map(event => (
            <Event key={event.id}>
              <img src={event.banner.url} alt={event.name} />
              <Description>
                <div>{event.date}</div>

                <div>
                  <h3>{event.name}</h3>
                  <span>
                    Organizado por <Link to="/">{event.promoter.name}</Link>
                  </span>
                </div>

                <button type="button">Comprar</button>
              </Description>
            </Event>
          ))}
        </ul>
      </Container>
    </>
  );
}
