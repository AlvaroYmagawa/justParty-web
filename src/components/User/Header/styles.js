import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  top: 0%;
  background: #fff;
  border-bottom: 1px solid ${colors.border};
  padding: 0 7%;
`;

export const Content = styled.div`
  height: 64px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    text-transform: uppercase;
  }

  nav {
    display: flex;
    align-items: center;
    font-weight: bold;
    color: ${colors.text};

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid ${colors.text};
    }
  }

  aside {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      height: 18px;
      width: 20px;
    }

    div {
      display: flex;
      align-items: center;
      color: ${colors.text};

      .profile {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        margin-right: 16px;

        span {
          font-size: 13px;
          color: ${colors.span};
        }
      }
    }
  }
`;
