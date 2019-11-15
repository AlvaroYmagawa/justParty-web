import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Exit } from './styles';
import AvatarInput from '~/components/AvatarInput';
import { DefaultButton } from '~/components/Buttons';

export default function ManageAccount({ visible }) {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container visible={visible}>
      <section>
        <AvatarInput
          src={
            profile.file === null
              ? 'https://api.adorable.io/avatars/110/abott@adorable.png'
              : profile.file.url
          }
          name="avatar_id"
        />
        <div>
          <span>
            <p>{profile.name}</p>
            {profile.email}
          </span>
          <Link to="/profile">
            <DefaultButton type="button">Gerenciar Conta</DefaultButton>
          </Link>
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

ManageAccount.propTypes = {
  visible: PropTypes.bool,
};

ManageAccount.defaultProps = {
  visible: false,
};
