import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '~/components/Header/Promoter';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  const isPromoter = useSelector(state => state.user.profile.promoter);

  return (
    <Wrapper isPromoter={isPromoter}>
      {isPromoter && <Header />}
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.elementType.isRequired,
};
