import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0%{background-position: 0% 50%}
  50%{background-position: 100% 50%}
  100%{background-position: 0% 50%}
`;

export const Container = styled.div`
  background: linear-gradient(-90deg, #ab59c1, #7159c1);
  animation: ${animation} 5s ease-in infinite;
  background-size: 400% 400%;
  box-shadow: 2px 2px 8px #00000077;
  padding: 0 8%;
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
    color: #fff;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #ffffff33;
    }
  }

  aside {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      color: #fff;

      .profile {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        margin-right: 16px;

        span {
          color: #ffffff88;
          font-size: 12px;
        }
      }
    }
  }
`;
