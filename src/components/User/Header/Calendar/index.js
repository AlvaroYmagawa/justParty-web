import React, { useState } from 'react';

import { FaCalendar } from 'react-icons/fa';
import { Container, Badge, MyCalendar } from './styles';

export default function Calendar() {
  const [visible, setVisible] = useState(false);

  function handleVisibility() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleVisibility}>
        <FaCalendar visible={visible} />
      </Badge>
      <MyCalendar visible={visible} />
    </Container>
  );
}
