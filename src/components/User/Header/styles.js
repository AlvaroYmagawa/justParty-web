import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  top: 0%;
  background: #fff;
  border-bottom: 1px solid ${colors.border};
  padding: 0 7%;
  z-index: 20;

  svg {
    height: 20px;
    width: 20px;
  }
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

  > nav {
    width: 100%;
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
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .profile {
      display: flex;
      align-items: center;
      color: ${colors.text};

      .profileName {
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
