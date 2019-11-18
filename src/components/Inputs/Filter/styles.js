import styled from 'styled-components';
import colors from '~/styles/colors';

export const Wrapper = styled.div`
  display: flex;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.border};
  padding: 8px 16px;

  input {
    border: none;
    background: none;

    &::placeholder {
      color: ${colors.span};
    }
  }

  svg {
    fill: ${colors.span};
    margin-right: 8px;
  }
`;
