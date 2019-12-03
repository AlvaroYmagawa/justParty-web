import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Container = styled.div`
  position: fixed;
  display: ${props => (props.visible ? 'flex' : 'none')};
  left: 0%;
  top: 0%;
  height: 100vh;
  width: 100vw;
  background: #00000055;
`;

export const Content = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 50%;
  top: 50%;
  padding: 24px;
  background: #eee;
  border-radius: 4px;
  width: 300px;
  transform: translate(-50%, -50%);

  .contentTittle {
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 16px;
      fill: ${colors.primary};
      height: 40px;
      min-height: 40px;
      min-width: 40px;
      width: 40px;
    }

    h2 {
      font-size: 16px;
    }
  }

  .contentButton {
    margin-top: 42px;
    display: flex;
    flex-direction: column;
  }
`;

export const CancelButton = styled.button`
  border: 0;
  background: none;
  margin-top: 8px;

  span {
    color: ${colors.span};

    &:hover {
      color: ${darken(0.3, colors.span)};
    }
  }
`;
