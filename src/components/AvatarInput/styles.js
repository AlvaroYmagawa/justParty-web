import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;

  label {
    cursor: pointer;
    border-radius: 50%;

    &:hover {
      opacity: 0.9;
    }

    div {
      padding-top: 50%;

      span {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        border-radius: 0 0 55px 55px;
        background: #00000077;
      }
    }

    input {
      display: none;
    }
  }
`;
