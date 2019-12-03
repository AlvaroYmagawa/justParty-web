import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { format, parseISO, formatDistance } from 'date-fns';

import pt from 'date-fns/locale/pt';
import { IoIosHeartEmpty, IoIosHeart, IoMdMusicalNote } from 'react-icons/all';
import { Input, Form } from '@rocketseat/unform';
import { formatPrice } from '~/util/format';
import { addToCart } from '~/store/modules/cart/actions';
import { DefaultButton } from '~/components/Buttons';
import api from '~/services/api';
import {
  addWishRequest,
  removeWishRequest,
} from '~/store/modules/wishlist/actions';

import Header from '~/components/User/Header';
import PromoterImage from '~/components/Avatar';
import { Categories } from '~/components/Events';
import BannerImage from '~/components/Banner';
import { Filter, FilterByCategory } from '~/components/Filters';
import VertMenu from './VertMenu';
import colors from '~/styles/colors';

import {
  Container,
  EventList,
  Event,
  Description,
  EventHeader,
  SellingArea,
  FavoriteButton,
} from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  function handleVisibility() {
    setVisible(!visible);
  }

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
      priceFormatted: formatPrice(event.price),
    }));

    return data;
  }

  useEffect(() => {
    async function loadEvents() {
      const wishlist = await api.get('wishlists');
      const response = await api.get('events');

      const data = response.data.map(event => ({
        ...event,
        favorited: wishlist.data.filter(wish => wish.event_id === event.id),
        day: format(parseISO(event.date), 'dd', {
          locale: pt,
        }),
        mounth: format(parseISO(event.date), 'MMMM', {
          locale: pt,
        }),
        hours: format(parseISO(event.date), 'HH:mm', {
          locale: pt,
        }),
        priceFormatted: formatPrice(event.price),
      }));

      setEvents(data);
    }

    async function loadCategories() {
      const response = await api.get('/defaultCategories');

      setCategories(response.data);
      setLoading(false);
    }

    loadCategories();
    loadEvents();
  }, []);

  function addProduct(product) {
    dispatch(addToCart(product));
  }

  async function loadAllEvents() {
    const response = await api.get('events');
    setEvents(formatDate(response.data));
  }

  async function handleSubmit(data) {
    if (data.filter === '') {
      loadAllEvents();
    } else {
      const response = await api.get(`/filter/events/${data.filter}`);
      setEvents(formatDate(response.data));
    }
  }

  async function filterByCategory(category) {
    const filterCategories = document.getElementById('filterCategories');
    filterCategories.value = category.name;

    const response = await api.get(`/filter/categories/${category.id}`);
    const data = response.data.map(event => event.Event);
    setEvents(formatDate(data));

    setVisible(false);
  }

  return (
    !loading && (
      <>
        <Header tittle="DASHBOARD" />
        <Container>
          <Form onSubmit={handleSubmit}>
            <h1>Eventos</h1>
            <div className="filters">
              <Filter>
                <Input name="filter" placeholder="Pesquisar" />
                <button type="submit">ok</button>
              </Filter>
              <button
                type="button"
                onClick={handleVisibility}
                className="filterCategory"
              >
                <FilterByCategory
                  visible={visible}
                  list={
                    <ul>
                      <li>
                        <button type="button" onClick={loadAllEvents}>
                          Todas
                        </button>
                      </li>
                      {categories.map(category => (
                        <li>
                          <button
                            type="button"
                            onClick={() => filterByCategory(category)}
                          >
                            {category.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  }
                >
                  <input
                    type="text"
                    disabled
                    id="filterCategories"
                    placeholder="Categoria musical"
                  />
                </FilterByCategory>
              </button>
            </div>
          </Form>

          <EventList>
            {events.length === 0 ? (
              <p />
            ) : (
              events.map(
                event =>
                  !event.past && (
                    <Event key={event.id}>
                      <EventHeader>
                        <div>
                          <Link to={`/users/${event.promoter.id}`}>
                            <div className="promoterImage">
                              <PromoterImage
                                src={event.promoter.File.url}
                                size={40}
                              />
                            </div>
                          </Link>
                          <Link to={`/users/${event.promoter.id}`}>
                            <h4>{event.promoter.name}</h4>
                          </Link>
                        </div>

                        {/* {event.favorited.length === 0 ? (
                      <FavoriteButton
                        type="button"
                        onClick={() => {
                          dispatch(addWishRequest(event.id));
                        }}
                      >
                        <IoIosHeartEmpty color={colors.text} />
                      </FavoriteButton>
                    ) : (
                      <FavoriteButton
                        type="button"
                        onClick={() => {
                          dispatch(removeWishRequest(event.id));
                        }}
                      >
                        <IoIosHeart color={colors.primary} />
                      </FavoriteButton>
                    )} */}

                        {/* <VertMenu /> */}
                      </EventHeader>
                      <Link to={`/events/${event.id}`}>
                        <BannerImage src={event.banner.url} size={300} />
                      </Link>
                      <Description>
                        <section>
                          <div className="date">
                            <h3>{event.mounth}</h3>
                            <h2>{event.day}</h2>
                          </div>
                          <tr />
                          <div className="description">
                            <div>
                              <h2>{event.name}</h2>
                              <span>{event.description}</span>
                            </div>

                            <Categories eventId={event.id} />
                          </div>
                        </section>

                        <SellingArea selling={event.selling}>
                          <h3>{event.priceFormatted}</h3>
                          <DefaultButton
                            type="button"
                            onClick={() => addProduct(event)}
                          >
                            Comprar
                          </DefaultButton>

                          <p className="salesDate">
                            Vendas
                            <strong>
                              {formatDistance(
                                parseISO(event.sales_date),
                                new Date(),
                                {
                                  addSuffix: true,
                                  locale: pt,
                                }
                              )}
                            </strong>
                          </p>
                        </SellingArea>
                      </Description>
                    </Event>
                  )
              )
            )}
          </EventList>
        </Container>
      </>
    )
  );
}
