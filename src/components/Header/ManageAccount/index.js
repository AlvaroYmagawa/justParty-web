import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Exit } from './styles';
import AvatarInput from '~/components/AvatarInput';

export default function ManageAccount({ visible }) {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container visible={visible}>
      <section>
        <AvatarInput src={profile.file.url} name="avatar_id" />
        <div>
          <span>
            <p>{profile.name}</p>
            {profile.email}
          </span>
          <button type="button">Gerenciar Conta</button>
        </div>
      </section>
      <Exit>
        <button type="button" className="exit" onClick={handleSignOut}>
          Sair
        </button>
      </Exit>
    </Container>
  );
}
