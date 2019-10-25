import React, { useState } from 'react';
import * as Yup from 'yup';
import { Input, Form } from '@rocketseat/unform';
import { FaSpinner, FaEyeSlash, FaEye } from 'react-icons/fa';
import logo from '~/assets/logo.png';

import { PasswordField, Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
  confirmPassword: Yup.string().required('Você deve confirmar a senha'),
});

export default function Modal() {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  function handleVisible() {
    const password = document.getElementById('regPassword');
    const confirmPassword = document.getElementById('confirmPassword');

    if (visible) {
      password.type = 'text';
      confirmPassword.type = 'text';
      setVisible(true);
    } else {
      password.type = 'password';
      confirmPassword.type = 'password';
      setVisible(true);
    }
  }

  return (
    <Container>
      <Form schema={schema}>
        <img src={logo} alt="JustParty" width="200" />
        <p>Criar sua conta do JustParty</p>
        <div>
          <Input name="name" type="text" placeholder="Nome" />
          <Input name="lastName" type="text" placeholder="Sobrenome" />
        </div>
        <Input name="email" type="text" placeholder="Email" />
        <PasswordField visible={visible}>
          <Input name="password" type="password" placeholder="Senha" />
          <Input
            name="confirmPasswrod"
            type="password"
            id="confirmPassword"
            placeholder="Confirmar"
          />
          {visible ? (
            <FaEye onClick={handleVisible} />
          ) : (
            <FaEyeSlash onClick={handleVisible} />
          )}
        </PasswordField>
        <button type="submit">
          {loading ? <FaSpinner /> : <p>Cadastrar</p>}
        </button>
      </Form>
    </Container>
  );
}
