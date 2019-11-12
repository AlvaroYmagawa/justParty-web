import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 30px;

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;

    h1 {
      font-weight: 400;
    }
  }
`;
