import styled from 'styled-components';

export const Container = styled.div`
  height: 260px;
  width: 100%;
  max-width: 500px;
  border: 1px solid #aaa;

  label {
    height: 100%;
    display: flex;
    cursor: pointer;

    input {
      display: none;
    }
  }
`;

export const Image = styled.div`
  height: 100%;
  width: 100%;
  background: url(${props => props.src}) center no-repeat;
  background-size: cover;
`;
