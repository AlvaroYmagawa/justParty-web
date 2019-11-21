import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';

import { Container } from './styles';
import Header from '~/components/Promoter/Header';

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

    async function loadWishList() {
      await api.get(`/wishlists/${eventId}`);
    }

    loadEvent();
    loadWishList();
  }, [eventId]);

  return (
    !loading && (
      <>
        <Header tittle={event.name} />
        <Container />
      </>
    )
  );
}
