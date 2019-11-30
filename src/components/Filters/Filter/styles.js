import styled from 'styled-components';
import colors from '~/styles/colors';

export const Wrapper = styled.div`
  display: flex;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.border};
  padding: 8px 16px;
  background: #eee;

  input {
    border: none;
    background: none;

    &::placeholder {
      color: ${colors.span};
    }
  }

  svg {
    height: 17px;
    width: 17px;
    fill: ${colors.span};
    margin-right: 8px;
  }

  button {
    display: none;
  }
`;
