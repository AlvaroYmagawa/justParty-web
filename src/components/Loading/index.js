import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Loading({ loading }) {
  return (
    <Container loading={loading}>
      <div className="first">.</div>
      <div className="second">.</div>
      <div className="third">.</div>
    </Container>
  );
}

Loading.propTypes = {
  loading: PropTypes.bool,
};

Loading.defaultProps = {
  loading: false,
};
