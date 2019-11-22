import styled from 'styled-components';
import Calendar from 'react-calendar';
import colors from '~/styles/colors';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  position: relative;
  border: none;
  background: none;

  svg {
    fill: ${props => (props.visible ? colors.accent : colors.text)};
  }
`;

export const MyCalendar = styled(Calendar)`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  margin-top: 30px;
`;
