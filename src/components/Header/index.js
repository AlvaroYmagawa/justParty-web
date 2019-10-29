import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { FaUserCircle, FaSearch, FaCalendar } from 'react-icons/fa';
import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo.png';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="JustParty" width="200" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <FaCalendar />
          <FaSearch />
        </aside>
      </Content>
    </Container>
  );
}
