/* eslint-disable default-case */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Input } from '@rocketseat/unform';
import { MdEmail, MdPhone, MdRoom, MdStar } from 'react-icons/md';
import api from '~/services/api';

import Header from '~/components/User/Header';
import Image from '~/components/Avatar';
import Loading from '~/components/Loading';
import Stars from './Stars';
import { Container, Description, CommentList, Commentary } from './styles';

// const schema = Yup.object().shape({
//   note: Yup.string().required('*'),
// });

export default function Promoter() {
  const profile = useSelector(state => state.user.profile);
  const { userId } = useParams();
  const [promoter, setPromoter] = useState({});
  const [evaluations, setEvaluations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPromoter() {
      const response = await api.get(`users/${userId}`);
      const evaluationsResponse = await api.get(`evaluations/${userId}`);

      setPromoter(response.data);
      setEvaluations(evaluationsResponse.data);
      setLoading(false);
    }

    loadPromoter();
  }, [userId]);

  async function updateCommentary(data) {
    const { comment, note } = data;

    await api.put(`evaluations/${userId}`, {
      comment,
      note,
    });
  }

  async function handleSubmit(data) {
    const { comment, note } = data;

    if (note === '') {
      return;
    }

    await api
      .post(`evaluations/${userId}`, {
        comment,
        note,
      })
      .catch(error => {
        switch (error.response.data.error) {
          case 'You already done your evaluation for this promoter':
            updateCommentary(data);
            break;
        }
      });
  }

  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <>
          <Header tittle={promoter.name} />
          <Container>
            <Image
              src={promoter.file.url}
              alt={promoter.file.name}
              size={160}
            />

            <h1>{promoter.name}</h1>
            <Stars array={evaluations} />

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

            <CommentList>
              <h3>Avaliações</h3>
              {evaluations.map(evaluation => (
                <li key={evaluation.id}>
                  <Image src={evaluation.user.File.url} size={32} />
                  <p>
                    <span>{evaluation.user.name}</span>
                    {evaluation.comment}
                  </p>
                  <MdStar color="#999" size={17} />
                  {evaluation.note}
                </li>
              ))}
              <Commentary onSubmit={handleSubmit}>
                <Image src={profile.file.url} size={32} />
                <Input
                  type="text"
                  name="comment"
                  placeholder="Faça uma avaliação..."
                />
                <MdStar color="#999" size={17} />
                <Input
                  type="number"
                  name="note"
                  max={5}
                  min={0}
                  placeholder="0"
                />
                <button type="submit">Submit</button>
              </Commentary>
            </CommentList>
          </Container>
        </>
      )}
    </>
  );
}
