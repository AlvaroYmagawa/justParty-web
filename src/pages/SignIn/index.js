import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Input, Form } from '@rocketseat/unform';
import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="JustParty" width="200" />
      <Form schema={schema}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Acessar</button>
        <Link to="/register">
          Ainda não possui uma conta? <span>Cadastre-se</span>
        </Link>
      </Form>
    </>
  );
}
