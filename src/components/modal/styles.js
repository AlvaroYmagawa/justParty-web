import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  form {
    display: none;
    flex-direction: column;
    position: absolute;
    border-radius: 10px;
    background: #fff;
    padding: 5rem 3.5rem;
    width: 90%;
    max-width: 50rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: display 3s;

    p {
      font-size: 2.2rem;
      margin: 2rem 0;
    }

    button {
      border-radius: 5px;
      background: #ba55d3;
      color: #fff;
      border: none;
      padding: 10px;
      width: 50%;
      margin: 1.5rem auto 0 auto;

      &:hover {
        background: purple;
      }

      ${props =>
    props.loading &&
    css`
          svg {
            animation: ${rotate} 2s linear infinite;
          }
        `}

      p {
        font-size: 1.5rem;
        margin: 0;
        padding: 0;
      }
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      input {
        width: 49%;

        & + input {
          margin-left: 1.2rem;
        }
      }
    }

    input {
      border-radius: 4px;
      border: 1px solid rgb(200, 200, 200);
      padding: 5px;
      width: 100%;
      margin-bottom: 2rem;

      &:focus {
        border: 1px solid #ba55d3;
        ::-webkit-input-placeholder {
          display: none;
        }
      }
    }
  }
`;

export const PasswordField = styled.div`
  svg {
    cursor: pointer;
    color: #444;
    height: 15px;
    width: 35px;
    margin: 0 auto 18.5px auto;
  }
`;
