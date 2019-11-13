import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import { DefaultButton } from '~/components/Buttons';
import Banner from '~/components/ImageInput';
import { Container, InputArea } from './styles';

export default function NewEvent() {
  return (
    <>
      <Container>
        <header>
          <h1>Criar um evento</h1>
        </header>

        <Form>
          <InputArea>
            Nome do evento
            <Input type="text" name="name" />
          </InputArea>

          <InputArea>
            Descrição do evento
            <Input multiline name="description" />
          </InputArea>

          <DefaultButton>Crair Evento</DefaultButton>

          <Banner alt="Event Banner" />
        </Form>
      </Container>
    </>
  );
}
