import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { MdChevronLeft } from 'react-icons/md';
import Header from '~/components/User/Header';
import { updateProfileRequest } from '~/store/modules/user/actions';
import colors from '~/styles/colors';

import { Container } from './styles';

export default function Profil() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <>
      <Header tittle="GERENCIAR CONTA" />
      <Container>
        <Link to="/">
          <MdChevronLeft size={45} color={colors.primary} />
        </Link>

        <Form initialData={profile} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome completo" />
          <Input
            name="email"
            type="email"
            placeholder="Seu endereço de e-mail"
          />
          <hr />
          <Input
            type="password"
            name="oldPassword"
            placeholder="Sua senha atual"
          />
          <Input type="password" name="password" placeholder="Nova senha" />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirmação de senha"
          />
          <button type="submit">Atualizar perfil</button>
        </Form>
      </Container>
    </>
  );
}
