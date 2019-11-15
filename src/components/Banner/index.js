import styled from 'styled-components';

export const Banner = styled.div`
  cursor: pointer;
  background: url(${props => props.src}) center;
  background-size: cover;
  background-repeat: no-repeat;
  height: ${props => props.size}px;
  width: 100%;
`;

export default Banner;
