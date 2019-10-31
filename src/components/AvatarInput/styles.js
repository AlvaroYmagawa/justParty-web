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
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      span {
        width: 100%;
        height: 50%;
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
