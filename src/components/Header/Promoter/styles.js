import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0%{background-position: 0% 50%}
  50%{background-position: 100% 50%}
  100%{background-position: 0% 50%}
`;

export const Container = styled.div`
  position: fixed;
  left: 0%;
  height: 100%;
  animation: ${animation} 4s ease-in infinite;
  background-size: 400% 400%;
  width: 200px;
  background: linear-gradient(#7159c1, #ab59c1);
  box-shadow: 4px 4px 8px #00000077;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 40px 0;

  nav {
    display: flex;
    flex-direction: column;
    color: #fff;
    padding: 0 30px;
  }

  > button {
    background: none;
    padding: 8px 12px;
    width: 80%;
    border-radius: 8px;
    color: #fff;
    border: 1px solid #ffffff77;

    &:hover {
      opacity: 0.7;
      transition: opacity 0.3s;
    }
  }

  p {
    color: #fff;
    margin-top: 8px;
  }

  span {
    color: #ffffff99;
    font-size: 12px;
  }

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    ul {
      width: 100%;
      border-bottom: 1px solid #ffffff55;

      li {
        width: 100%;
        border-top: 1px solid #ffffff55;
        padding: 12px 0;
        text-align: center;

        > button {
          border: none;
          padding: 8px 12px;
          background: none;
          color: #fff;
          font-weight: bold;
        }
      }
    }
  }
`;
