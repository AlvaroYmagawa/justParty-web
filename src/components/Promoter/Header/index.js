import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { MdMenu } from 'react-icons/md';
import { Container, Content } from './styles';
import { Avatar } from '~/components/Avatar';
import ManageAccount from './ManageAccount';

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
      <ManageAccount visible={editing} />
      <Content>
        <div className="tittle">
          <button type="button">
            <MdMenu size={24} />
          </button>

          <h2>{tittle}</h2>
        </div>

        <aside>
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
