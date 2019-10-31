import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 110px;
      width: 110px;
      border-radius: 50%;
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
