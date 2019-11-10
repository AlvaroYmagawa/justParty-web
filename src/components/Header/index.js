import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import UserHeader from './User';
import PromoterHeader from './Promoter';

export default function Header({ tittle }) {
  const isPromoter = useSelector(state => state.user.profile.promoter);

  return isPromoter ? <PromoterHeader /> : <UserHeader tittle={tittle} />;
}

Header.propTypes = {
  tittle: PropTypes.string,
};

Header.defaultProps = {
  tittle: false,
};
