import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Input, Form } from '@rocketseat/unform';
import logo from '~/assets/logo.png';
import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
  confirmPassword: Yup.string().required('Confirme sua senha'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password, confirmPassword }) {
    dispatch(signUpRequest(name, email, password, confirmPassword));
  }

  return (
    <>
      <img src={logo} alt="JustParty" width="200" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
        />

        <button type="submit">Cadastre-se</button>
        <Link to="/">Já possuí uma conta, hora da festa!</Link>
      </Form>
    </>
  );
}
