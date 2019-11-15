import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PromoterHeader from '~/components/Promoter/Header';
import AsideMenu from '~/components/Promoter/Header/AsideMenu';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  const [asideMenu, setAsideMenu] = useState(true);
  const isPromoter = useSelector(state => state.user.profile.promoter);

  function handleAsideMenu() {
    if (asideMenu) {
      setAsideMenu(false);
    } else {
      setAsideMenu(true);
    }
  }

  return (
    <>
      <Wrapper isPromoter={isPromoter}>
        {isPromoter && (
          <>
            <AsideMenu enable />
            <PromoterHeader tittle="test" />
          </>
        )}
        {children}
      </Wrapper>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.elementType.isRequired,
};
