import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '~/store/modules/auth/actions';
import { Container, Content } from './styles';
import { Avatar } from '~/components/Avatar';
import ManageAccount from '../ManageAccount';
import logo from '~/assets/logo.png';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const [editing, setEditing] = useState(false);

  function handleEditing() {
    if (editing) {
      setEditing(false);
    } else {
      setEditing(true);
    }
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="JustParty" width="150" />
          </Link>
          DEVELOPERS
        </nav>

        <div>
          <Avatar
            src={
              profile.file === null
                ? 'https://api.adorable.io/avatars/110/abott@adorable.png'
                : profile.file.url
            }
            size={90}
            onClick={handleEditing}
            editing={editing}
          />
          <p>{profile.name}</p>
          <span>{profile.email}</span>
        </div>

        <aside>
          <ul>
            <li>
              <button type="button">Meus eventos</button>
            </li>
            <li>
              <button type="button">Gerenciar conta</button>
            </li>
          </ul>
        </aside>

        <button type="button" onClick={handleSignOut}>
          Sair
        </button>
        <ManageAccount visible={editing} />
      </Content>
    </Container>
  );
}
