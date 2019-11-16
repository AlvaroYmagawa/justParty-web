import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  MdSettings,
  MdEvent,
  MdPermIdentity,
  MdCreditCard,
} from 'react-icons/md';
import { Container, Block } from './styles';
import logo from '~/assets/logo.png';

export default function AsideMenu({ enable }) {
  return (
    <>
      <Block enable={enable} />
      <Container enable={enable}>
        <header>
          <img src={logo} alt="JustParty" width="140" />
          <h4>DEVELOPERS</h4>
        </header>

        <ul>
          <li>
            <Link>
              <MdEvent />
              Meus eventos
            </Link>
          </li>
          <li>
            <Link>
              <MdPermIdentity />
              Minhas conta
            </Link>
          </li>
          <li>
            <Link>
              <MdCreditCard />
              Forma de pagamento
            </Link>
          </li>
          <li>
            <Link>
              <MdSettings />
              Configurações
            </Link>
          </li>
        </ul>
      </Container>
    </>
  );
}

AsideMenu.propTypes = {
  enable: PropTypes.bool.isRequired,
};
