import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import colors from '~/styles/colors';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  position: relative;
  background: none;
  border: 0;

  ${props =>
    props.isEmpty &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: ${colors.accent};
        content: '';
        border-radius: 50%;
      }
    `}
`;

export const WishList = styled.ul`
  position: absolute;
  width: 350px;
  left: calc(50% - 175px);
  top: calc(100% + 30px);
  padding: 16px;
  background: #fff;
  border: 1px solid ${colors.border};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  display: ${props => (props.visible ? 'block' : 'none')};
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
`;

export const Wish = styled.li`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 8px 0;

  .eventBanner {
    border-radius: 4px;
    width: 140px;
    min-width: 140px;
    height: 70px;
    min-height: 70px;
  }
  .wishInfo {
    margin-left: 24px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    span {
      margin-top: 6px;
      color: ${colors.span};

      strong {
        color: ${colors.primary};
        margin-right: 5px;
      }
    }
  }
`;
