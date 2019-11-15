import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100%;
  background: #f7f7f7;
  padding-top: 64px
    ${props =>
      props.isPromoter &&
      css`
        display: flex;
        padding-left: 250px;
      `};
`;
