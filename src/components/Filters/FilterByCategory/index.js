import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { IoMdArrowDropdown } from 'react-icons/io';
import { Container, Badge, Categories, Scroll } from './styles';

export default function FilterByCategory({ children, list, visible }) {
  // const [visible, setVisible] = useState(false);

  // function handleVisibility() {
  //   setVisible(!visible);
  // }

  return (
    <Container>
      <Badge visible={visible}>
        {children}
        <IoMdArrowDropdown />
      </Badge>
      <Categories visible={visible}>
        <Scroll>{list}</Scroll>
      </Categories>
    </Container>
  );
}

FilterByCategory.propTypes = {
  children: PropTypes.isRequired,
  list: PropTypes.arrayOf.isRequired,
};
