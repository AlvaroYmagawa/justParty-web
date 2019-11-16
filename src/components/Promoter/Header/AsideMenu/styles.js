import styled, { keyframes } from 'styled-components';
import colors from '~/styles/colors';

export const Block = styled.div`
  display: ${props => (props.enable ? 'flex' : 'none')};
  width: 308px;
  height: 100%;
  position: relative;
  left: 0%;
`;

const startAnimation = keyframes`
  to{
    top: 0%;
  }

  from{
   top: 100%;
  }
`;

export const Container = styled.div`
  display: ${props => (props.enable ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  left: 0%;
  top: 0%;
  background: #fff;
  box-shadow: 3px 0px 5px #00000035;
  height: 100%;
  padding: 24px 0;
  width: 250px;
  animation: linear ${startAnimation} 0.3s;

  header {
    border-bottom: 1px solid ${colors.border};
    padding: 0 24px 16px;

    h2 {
      font-weight: 400;
      font-size: 14px;
    }
  }

  ul {
    padding: 0 24px;
    display: flex;
    flex-direction: column;

    li {
      margin-top: 32px;

      a {
        display: flex;
        align-items: center;
        color: #777;
        font-size: 16px;

        svg {
          margin-right: 16px;
        }
      }
    }
  }
`;
