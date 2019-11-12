import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import { Link } from 'react-router-dom';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';
import Image from '~/components/Banner';
import { Container, EventList, Status } from './styles';

export default function Promoter() {
  const profile = useSelector(state => state.user.profile);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadEvents() {
      const response = await api.get(`/${profile.id}/events`);

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
      setLoading(false);
    }

    loadEvents();
  }, [profile.id]);

  return (
    !loading && (
      <Container>
        <header>
          <h1>Meus Eventos</h1>
          <Link to="/developers/events/new">
            <h3>Criar evento</h3>
          </Link>
        </header>

        <EventList>
          {events.map(event => (
            <li key={event.id}>
              <Image src={event.banner.url} size={200} />
              <div className="description">
                <div>
                  <h3>{event.name}</h3>
                  <span>
                    <p>{`${event.day} de ${event.mounth} ás ${event.hours}`}</p>
                  </span>
                </div>

                <div>
                  <Status type="Status" past={event.past}>
                    {event.past ? 'Encerrado' : 'Em aberto'}
                  </Status>
                </div>
              </div>
            </li>
          ))}
        </EventList>
      </Container>
    )
  );
}
