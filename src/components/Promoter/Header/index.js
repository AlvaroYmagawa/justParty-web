import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { MdMenu } from 'react-icons/md';
import { Container, Content } from './styles';
import { Avatar } from '~/components/Avatar';
import ManageAccount from './ManageAccount';
import AsideMenu from './AsideMenu';

export default function Header({ tittle }) {
  const profile = useSelector(state => state.user.profile);
  const [editing, setEditing] = useState(false);
  const [asideMenu, setAsideMenu] = useState(true);

  function handleEditing() {
    if (editing) {
      setEditing(false);
    } else {
      setEditing(true);
    }
  }

  function handleAsideMenu() {
    if (asideMenu) {
      setAsideMenu(false);
    } else {
      setAsideMenu(true);
    }
  }

  return (
    <>
      <AsideMenu enable={asideMenu} />
      <Container asideMenu={asideMenu}>
        <ManageAccount visible={editing} />
        <Content>
          <div className="tittle">
            <button type="button" onClick={handleAsideMenu}>
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
    </>
  );
}

Header.propTypes = {
  tittle: PropTypes.string,
};

Header.defaultProps = {
  tittle: false,
};
