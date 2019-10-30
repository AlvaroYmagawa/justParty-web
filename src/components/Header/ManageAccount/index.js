import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Exit } from './styles';

export default function ManageAccount({ visible }) {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container visible={visible}>
      <section>
        <img src={profile.file.url} alt="test" width="40" />
        <div>
          <span>
            <p>{profile.name}</p>
            {profile.email}
          </span>
          <button type="button">Gerenciar Conta</button>
        </div>
      </section>
      <Exit to="/login">
        <button type="button" className="exit">
          Sair
        </button>
      </Exit>
    </Container>
  );
}
