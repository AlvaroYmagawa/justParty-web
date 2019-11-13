import styled from 'styled-components';
import colors from '~/styles/colors';

export const DefaultButton = styled.button`
  border-radius: 4px;
  background: ${colors.primary};
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
`;

export const Test = styled.button``;

export default [DefaultButton, Test];
