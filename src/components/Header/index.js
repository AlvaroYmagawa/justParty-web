import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { FaSearch, FaCalendar } from 'react-icons/fa';
import { Container, Content } from './styles';
import { Avatar } from '~/components/Avatar';
import ManageAccount from './ManageAccount';
import logo from '~/assets/logo.png';

export default function Header({ tittle }) {
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
          <Link to="/dashboard">
            <img src={logo} alt="JustParty" width="190" />
          </Link>
          {tittle}
        </nav>

        <aside>
          <FaCalendar color="#eee" size={17} />
          <FaSearch color="#eee" />
          <Avatar
            src={
              profile.file === null
                ? 'https://api.adorable.io/avatars/110/abott@adorable.png'
                : profile.file.url
            }
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

Header.propTypes = {
  tittle: PropTypes.string,
};

Header.defaultProps = {
  tittle: false,
};
