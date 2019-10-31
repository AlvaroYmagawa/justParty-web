import styled, { css } from 'styled-components';
import colors from '~/styles/colors';

export const Avatar = styled.div`
  cursor: pointer;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  background: url(${props => props.src}) center;
  background-size: cover;
  border-radius: 50%;

  ${props =>
    props.editing &&
    css`
      border: 2px solid ${colors.primary};
    `}

  span {
    color: black;
  }
`;

export default Avatar;
