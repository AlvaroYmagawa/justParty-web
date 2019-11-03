import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  MdEmail,
  MdPhone,
  MdRoom,
  MdThumbDown,
  MdThumbUp,
} from 'react-icons/md';
import api from '~/services/api';

import Header from '~/components/Header';
import Image from '~/components/Avatar';
import { Container, Description } from './styles';

export default function Promoter() {
  const { userId } = useParams();
  const [promoter, setPromoter] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPromoter() {
      const response = await api.get(`users/${userId}`);

      setPromoter(response.data);
      setLoading(false);
    }
    loadPromoter();
  }, [userId]);

  return (
    <>
      <Header />
      {!loading && (
        <Container>
          <Image src={promoter.file.url} alt={promoter.file.name} size={160} />
          <h1>{promoter.name}</h1>
          <div className="buttons">
            <button type="button">
              <MdThumbUp color="#999" size={25} />
              {promoter.likes}
            </button>

            <button type="button">
              <MdThumbDown color="#999" size={25} />
              {promoter.dislikes}
            </button>
          </div>
          <Description>
            <p>{promoter.description}</p>
            <span>
              <MdEmail color="#999" size={17} />
              {promoter.email}
            </span>
            <span>
              <MdPhone color="#999" size={17} />
              {promoter.contact}
            </span>
            <span>
              <MdRoom color="#999" size={17} />
              {promoter.adress}
            </span>
          </Description>
        </Container>
      )}
    </>
  );
}
