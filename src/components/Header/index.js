import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { FaSearch, FaCalendar } from 'react-icons/fa';
import { Container, Content } from './styles';
import { Avatar } from '~/components/Avatar';
import ManageAccount from './ManageAccount';
import logo from '~/assets/logo.png';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const [editing, setEditing] = useState(false);

  function handleEditing() {
    if (editing) {
      setEditing(false);
    } else {
      setEditing(true);
    }
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="JustParty" width="190" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <FaCalendar color="#eee" size={17} />
          <FaSearch color="#eee" />
          <Avatar
            src={profile.file.url}
            size={35}
            onClick={handleEditing}
            editing={editing}
          />
        </aside>

        <ManageAccount visible={editing} />
      </Content>
    </Container>
  );
}
