import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  position: fixed;
  width: calc(100% - 250px);
  top: 0%;
  padding: 0 24px;
  background: linear-gradient(-90deg, ${colors.darkPrimary}, ${colors.primary});

  .tittle {
    display: flex;
    align-items: center;

    h2 {
      color: #fff;
      font-weight: 400;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: none;

      svg {
        fill: #fff;
        margin-right: 32px;
      }
    }
  }
`;

export const Content = styled.div`
  height: 64px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
