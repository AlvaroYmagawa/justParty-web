import styled from 'styled-components';
import { Form } from '@rocketseat/unform';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 40px 8%;

  h1 {
    font-weight: 300;
    margin-top: 16px;
  }
`;

export const Description = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-top: 1px solid #bbb;
  padding-top: 16px;
  margin-top: 16px;

  span {
    display: flex;
    align-items: center;
    svg {
      margin-right: 8px;
    }
    margin-top: 8px;
  }
`;

export const CommentList = styled.ul`
  margin-top: 24px;
  width: 100%;
  background: #fff;
  padding: 16px;

  li {
    display: flex;
    align-items: center;
    margin-top: 16px;

    p {
      margin-left: 16px;
      margin-right: 8px;
      border-radius: 16px;
      background: #eee;
      color: black;
      padding: 10px;
      max-width: 550px;

      span {
        font-weight: bold;
        color: ${colors.darkPrimary};
        margin-right: 8px;
      }
    }
  }
`;

export const Commentary = styled(Form)`
  margin-top: 16px;
  display: flex;
  align-items: center;
  width: 100%;

  button {
    display: none;
  }

  input[type='text'] {
    margin-left: 16px;
    padding: 8px 16px;
    margin-right: 8px;
    border-radius: 16px;
    border: 1px solid #ccc;
    background: #eee;
    width: 100%;
    max-width: 500px;

    &::placeholder {
      color: #999;
      font-size: 13px;
    }
  }

  input[type='number'] {
    border: 0;
    background: none;
  }
`;
