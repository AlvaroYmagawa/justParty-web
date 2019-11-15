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
          <h3>{tittle}</h3>
        </nav>

        <aside>
          <FaCalendar size={17} />
          <FaSearch size={17} />
          <div>
            <div className="profile">
              <h4>{profile.name}</h4>
              <span>{profile.email}</span>
            </div>

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
          </div>
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
