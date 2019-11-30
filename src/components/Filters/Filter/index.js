import React from 'react';
import PropTypes from 'prop-types';

import { MdSearch } from 'react-icons/md';
import { Wrapper } from './styles';

export default function Filter({ children }) {
  return (
    <Wrapper>
      <MdSearch />
      {children}
    </Wrapper>
  );
}

Filter.propTypes = {
  children: PropTypes.elementType.isRequired,
};
