import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100%;
  background: #eee;

  ${props =>
    props.isPromoter &&
    css`
      display: flex;
      padding-left: 200px;
    `}
`;
