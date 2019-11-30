/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';
import { Input, Form } from '@rocketseat/unform';
import { FaTrash } from 'react-icons/fa';
import api from '~/services/api';

import Image from '~/components/Banner';
import Header from '~/components/Promoter/Header';
import { Container, EventList, Status } from './styles';
import { DefaultButton } from '~/components/Buttons';
import { Filter } from '~/components/Filters';

export default function Dashboard() {
  const profile = useSelector(state => state.user.profile);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  function formatDate(array) {
    const data = array.map(event => ({
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

    return data;
  }

  useEffect(() => {
    async function loadEvents() {
      const response = await api.get(`/${profile.id}/events`);

      setEvents(formatDate(response.data));
      setLoading(false);
    }
    loadEvents();
  }, [profile.id]);

  async function handleSubmit(data) {
    let response;
    if (data.filter === '') {
      response = await api.get(`/${profile.id}/events`);
    } else {
      response = await api.get(`/filter/developers/${data.filter}`);
    }
    setEvents(formatDate(response.data));
  }

  return (
    !loading && (
      <>
        <Header tittle="Meus eventos" />
        <Container>
          <div className="controlllerArea">
            <Form onSubmit={handleSubmit}>
              <Filter>
                <Input
                  name="filter"
                  type="text"
                  placeholder="Pesquisar eventos"
                />
              </Filter>
              <button type="submit" />
            </Form>

            <Link to="/developers/events/new">
              <DefaultButton>Criar evento</DefaultButton>
            </Link>
          </div>
          <EventList>
            {events.map(event => (
              <li key={event.id}>
                <Link to={`/developers/events/${event.id}`}>
                  <Status type="Status" past={event.past}>
                    {event.past ? 'Encerrado' : 'Em aberto'}
                  </Status>
                  <Image src={event.banner.url} size={200} />
                  <div className="description">
                    <div>
                      <h3>{event.name}</h3>
                      <span>
                        {`${event.day} de ${event.mounth} ás ${event.hours}`}
                      </span>
                    </div>

                    <div>
                      <FaTrash size={17} />
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </EventList>
        </Container>
      </>
    )
  );
}
