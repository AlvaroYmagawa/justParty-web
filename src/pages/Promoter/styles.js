import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 8%;

  h1 {
    font-weight: 300;
    margin-top: 16px;
  }

  .buttons {
    display: flex;

    button {
      border: 0;
      background: none;
      display: flex;
      align-items: center;

      & > & {
        margin-left: 200px;
      }

      svg {
        margin-right: 8px;
      }
    }
  }
`;

export const Description = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  flex-direction: column;
  border-top: 1px solid #bbb;
  padding-top: 16px;
  margin-top: 16px;

  span {
    display: flex;
    align-items: center;
    svg {
      margin-right: 8px;
    }
    margin-top: 8px;
  }
`;
