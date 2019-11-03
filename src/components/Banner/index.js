import styled from 'styled-components';

export const Banner = styled.div`
  cursor: pointer;
  background: url(${props => props.src}) center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 12px 12px 0 0;
  height: 300px;
  width: 100%;
`;

export default Banner;
