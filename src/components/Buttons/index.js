import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const DefaultButton = styled.button`
  border-radius: 4px;
  background: ${colors.accent};
  border: none;
  padding: 8px 24px;
  font-size: 14px;
  color: #fff;
  font-weight: bold;

  &:hover {
    transition: background 0.3s;
    background: ${darken(0.05, colors.accent)};
  }
`;

export const Test = styled.button``;

export default [DefaultButton, Test];
