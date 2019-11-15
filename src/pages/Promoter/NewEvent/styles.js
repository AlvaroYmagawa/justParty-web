import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 30px;

  header {
    display: flex;
    padding-bottom: 24px;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    border-bottom: 1px solid #ccc;

    h1 {
      font-weight: 400;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      padding: 8px;

      &:hover {
        background: #ddd;
      }
    }
  }

  form {
    width: 100%;
    max-width: 550px;
    display: flex;
    flex-direction: column;

    button {
      margin-top: 24px;
    }
  }
`;

export const InputArea = styled.div`
  margin-top: 24px;
  display: flex;
  font-size: 14px;
  flex-direction: column;
  font-weight: bold;

  span {
    margin: 8px 0;
    color: #888;
    font-weight: normal;
  }

  input,
  textarea {
    margin-top: 8px;
    padding: 8px;
    background: none;
    border-radius: 4px;
    border: 1px solid #999;

    &:hover,
    &:focus {
      border: 1px solid ${colors.primary};
    }
  }

  input[type='date'] {
    max-width: 160px;

    & + input {
      margin-bottom: 24px;
    }
  }
  textarea {
    resize: none;
  }
`;
