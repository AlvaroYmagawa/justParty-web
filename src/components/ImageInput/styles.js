import styled from 'styled-components';

export const Container = styled.div`
  height: 200px;
  width: 100%;
  max-width: 400px;

  label {
    display: flex;
    cursor: pointer;

    input {
      display: none;
    }
  }
`;

export const Image = styled.div`
  height: 200px;
  width: 100%;
  background: url(${props => props.src}) center no-repeat;
  background-size: cover;
`;
