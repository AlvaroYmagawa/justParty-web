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
    border-bottom: 1px solid #bbb;

    h1 {
      font-weight: 400;
    }
  }

  form {
    width: 50%;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
  }
`;

export const InputArea = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  font-weight: bold;

  input {
    padding: 4px;
    background: none;
    border: none;
    border-bottom: 1px solid #555;
  }
`;
