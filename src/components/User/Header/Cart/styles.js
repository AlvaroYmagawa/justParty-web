import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import colors from '~/styles/colors';
import { DefaultButton } from '~/components/Buttons';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  position: relative;
  border: none;
  background: none;
`;

export const Products = styled.div`
  position: absolute;
  width: 280px;
  left: calc(50% - 140px);
  top: calc(100% + 30px);
  background: #fff;
  border: 1px solid ${colors.border};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  display: ${props => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 0;

  h3 {
    color: ${colors.text};
    text-transform: none;
    padding-bottom: 16px;
    margin-bottom: 8px;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid ${colors.border};
  }
`;

export const BuyButton = styled(DefaultButton)`
  margin-top: 16px;
  width: 50%;
`;

export const Scroll = styled(PerfectScrollbar)`
  width: 100%;
  max-height: 260px;
  padding: 0 0 16px 16px;
  border-bottom: 1px solid ${colors.border};
`;

export const Product = styled.li`
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

  .productInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    width: 100%;

    .productInfoHeader {
      font-size: 16px;
      > span {
        font-size: 12px;
        color: ${colors.span};
      }
    }
  }

  .productCounter {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    h4 {
      color: ${colors.primary};
      font-size: 13px;
    }

    .productCounterButtons {
      margin-top: 8px;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        cursor: pointer;
        color: ${colors.text};
        margin: 0 16px;
        font-weight: bold;
      }

      button {
        border: 0;
        background: none;
      }
    }
  }
`;

export const Total = styled.h3`
  margin-top: 20px;
`;
