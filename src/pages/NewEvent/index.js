import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import { MdClose } from 'react-icons/md';
import api from '~/services/api';
import { DefaultButton } from '~/components/Buttons';
import Banner from '~/components/ImageInput';
import { Container, InputArea } from './styles';

export default function NewEvent() {
  async function handleSubmit(data) {
    const response = await api.post('/events', {
      name: data.name,
      localization: data.localization,
      description: data.description,
      date: '2019-12-31T18:00:00-03:00',
      sales_date: '2019-12-31T18:00:00-03:00',
      banner_id: 4,
    });
  }

  return (
    <>
      <Container>
        <header>
          <h1>Criar um evento</h1>
          <Link to="/dashboard">
            <MdClose size={28} color="#555" />
          </Link>
        </header>

        <Form onSubmit={handleSubmit}>
          <InputArea>
            Nome do evento
            <Input type="text" name="name" />
          </InputArea>

          <InputArea>
            Descrição do evento
            <Input multiline name="description" />
          </InputArea>

          <InputArea>
            Localização
            <Input type="text" name="localization" />
          </InputArea>

          <InputArea>
            Data ínicio da festa
            <Input type="date" name="date" />
          </InputArea>

          <InputArea>
            Ínicio das vendas
            <Input type="date" name="salesData" />
          </InputArea>

          <InputArea>
            <p>Banner do evento</p>
            <span>Esse é o banner que será mostrado na página do evento.</span>
            <Banner alt="Event Banner" />
          </InputArea>

          <DefaultButton type="submit">Crair Evento</DefaultButton>
        </Form>
      </Container>
    </>
  );
}
