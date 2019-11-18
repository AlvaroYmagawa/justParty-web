import React from 'react';
import InputMask from 'react-input-mask';

import { Form, Input } from '@rocketseat/unform';
import Header from '~/components/Promoter/Header';
import api from '~/services/api';
import { DefaultButton } from '~/components/Buttons';
import Banner from '~/components/ImageInput';
import { Container, InputArea } from './styles';

export default function NewEvent() {
  async function handleSubmit(data) {
    const dateHours = document.getElementById('dateHours');
    const salesDateHours = document.getElementById('salesDateHours');

    console.tron.log(data.banner);

    await api.post('/events', {
      name: data.name,
      localization: data.localization,
      description: data.description,
      date: `${data.date}T${dateHours.value}-3:00`,
      sales_date: `${data.salesDate}T${salesDateHours.value}-3:00`,
      banner_id: 4,
    });
  }

  return (
    <>
      <Header tittle="Novo Evento" />
      <Container>
        <Form onSubmit={handleSubmit}>
          <InputArea>
            <header>
              <h3>Detalhes do evento</h3>
              <p>
                Os campos marcados com <span> * </span> devem ser preenchidos
                antes de publicar.
              </p>
            </header>

            <div className="content">
              <p>
                Nome <span>*</span>
              </p>
              <Input type="text" name="name" />
            </div>

            <div className="content">
              <p>Descrição</p>
              <Input type="text" name="description" />
            </div>

            <div className="content">
              <p>
                Localização <span>*</span>
              </p>
              <Input type="text" name="localization" />
            </div>
          </InputArea>

          <InputArea>
            <h3>Datas e horários</h3>

            <div className="content">
              <div>
                <p>
                  Data da festa <span>*</span>
                </p>
                <Input type="date" name="date" />
              </div>

              <div>
                <p>
                  Horário <span>*</span>
                </p>
                <InputMask mask="99:99" className="hours" id="dateHours" />
              </div>
            </div>

            <div className="content">
              <div>
                <p>
                  Data das vendas <span>*</span>
                </p>
                <Input type="date" name="salesData" />
              </div>

              <div>
                <p>
                  Horário <span>*</span>
                </p>
                <InputMask mask="99:99" className="hours" id="salesDateHours" />
              </div>
            </div>
          </InputArea>

          <InputArea>
            <h3>Personalização</h3>

            <div className="banner">
              <p>
                Banner do evento <span>*</span>
              </p>

              <div className="bannerInfo">
                Resolução da imagem
                <span>500 x 260</span>
              </div>

              <Banner alt="Banner do seu evento" name="banner" />
            </div>
          </InputArea>

          <DefaultButton type="submit">Crair Evento</DefaultButton>
        </Form>
      </Container>
    </>
  );
}
