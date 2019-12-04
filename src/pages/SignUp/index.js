import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Input, Form } from '@rocketseat/unform';
import { DefaultButton } from '~/components/Buttons';
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
  const [isPromoter, setIsPromoter] = useState(false);
  const dispatch = useDispatch();

  function handleSubmit({
    name,
    email,
    password,
    confirmPassword,
    description, // teste
    adress,
  }) {
    dispatch(
      signUpRequest(
        name,
        email,
        password,
        confirmPassword,
        description,
        adress,
        isPromoter
      )
    );
  }

  function handleIsPromoter() {
    setIsPromoter(!isPromoter);
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

        {isPromoter && (
          <>
            <Input name="description" type="text" placeholder="Descrição" />

            <Input name="adress" type="text" placeholder="Endereço" />

            <Input name="contact" type="text" placeholder="Telefone" />
          </>
        )}

        <DefaultButton type="submit">Cadastre-se</DefaultButton>

        <button type="button" className="checkbox" onClick={handleIsPromoter}>
          <div />
          Quero ser um promotor!
        </button>

        <Link to="/">Já possuí uma conta, hora da festa!</Link>
      </Form>
    </>
  );
}
