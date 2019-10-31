import styled, { css } from 'styled-components';

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
      border: 2px solid #eeeeee88;
    `}
`;

export default Avatar;
