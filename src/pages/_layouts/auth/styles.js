import styled from 'styled-components';
import colors from '~/styles/colors';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      margin-bottom: 16px;
      border-radius: 4px;
      border: 1px solid ${colors.border};

      padding: 8px;

      &::placeholder {
        color: ${colors.span};
      }
    }

    .checkbox {
      margin-top: 8px;
      display: flex;
      align-items: center;
      background: none;
      border: none;
      color: ${colors.span};

      font-weight: bold;

      div {
        margin-right: 8px;
        width: 17px;
        height: 17px;
        border-radius: 4px;
        border: 1px solid ${colors.border};
      }
    }

    a {
      color: ${colors.darkPrimary};
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
