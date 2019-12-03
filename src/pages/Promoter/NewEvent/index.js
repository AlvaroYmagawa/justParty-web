import React, { useState } from 'react';
import InputMask from 'react-input-mask';

import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { MdAdd } from 'react-icons/md';
import history from '~/services/history';
import Header from '~/components/Promoter/Header';
import api from '~/services/api';
import { DefaultButton } from '~/components/Buttons';
import Banner from '~/components/ImageInput';
import { Container, InputArea } from './styles';
import { Categories } from '~/components/Filters';

export default function NewEvent() {
  const [categories, setCategories] = useState([1]);
  const [index, setIndex] = useState(2);
  async function registerCategories(eventId, categoryId) {
    await api.post('categories', {
      event_id: eventId,
      default_category_id: categoryId,
    });
  }

  async function handleSubmit(data) {
    const dateHours = document.getElementById('dateHours');
    const salesDateHours = document.getElementById('salesDateHours');

    const response = await api.post('/events', {
      name: data.name,
      localization: data.localization,
      description: data.description,
      date: `${data.date}T${dateHours.value}-3:00`,
      sales_date: `${data.salesDate}T${salesDateHours.value}-3:00`,
      banner_id: data.imageInput,
      price: data.price,
    });

    for (let i = 0; i < categories.length; i += 1) {
      switch (i) {
        case 0:
          registerCategories(response.data.id, data.category1);
          break;
        case 1:
          registerCategories(response.data.id, data.category2);
          break;
        case 2:
          registerCategories(response.data.id, data.category3);
          break;
        case 3:
          registerCategories(response.data.id, data.category4);
          break;
        default:
      }
    }

    toast.success('Evento Publicado com sucesso!');
    history.push('/developers/events');
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
              <div className="dateArea">
                <p>
                  Data da festa <span>*</span>
                </p>
                <Input type="date" name="date" />
              </div>

              <div className="dateArea">
                <p>
                  Horário <span>*</span>
                </p>
                <InputMask mask="99:99" className="hours" id="dateHours" />
              </div>
            </div>

            <div className="content">
              <div className="dateArea">
                <p>
                  Data das vendas <span>*</span>
                </p>
                <Input type="date" name="salesDate" />
              </div>

              <div className="dateArea">
                <p>
                  Horário <span>*</span>
                </p>
                <InputMask mask="99:99" className="hours" id="salesDateHours" />
              </div>
            </div>
          </InputArea>

          <InputArea>
            <div className="categoriesHeader">
              <h3>Categoria Musical</h3>
              <button
                type="button"
                onClick={() => {
                  if (index === 5) {
                    toast.error('O número máximo de categorias é 4');
                    return;
                  }
                  setIndex(index + 1);
                  setCategories([...categories, index]);
                }}
              >
                Nova categoria
                <MdAdd />
              </button>
            </div>
            <span>É obrigatório pelo menos uma categoria</span>
            {categories.map(category => (
              <div className="content">
                <p>{`Categoria ${category}`}</p>
                <Categories name={`category${category}`} />
              </div>
            ))}
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

          <InputArea>
            <h3>Precificação</h3>
            <div className="content">
              <p>
                Preço do ingresso <span>*</span>
              </p>
              <Input type="number" min="1" name="price" />
            </div>
          </InputArea>

          <DefaultButton type="submit">Publicar Evento</DefaultButton>
        </Form>
      </Container>
    </>
  );
}
