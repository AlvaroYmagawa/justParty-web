import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px 16px;
  max-width: 800px;
  margin: 0 auto;

  section {
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 16px;
    border: 1px solid #ddd;

    h1 {
      font-size: 1.8rem;
    }

    span {
      color: #888;
      font-size: 1rem;
    }
  }
`;

export const Tittle = styled.div`
  display: flex;
  width: 100%;
  padding: 16px 0;
  align-items: center;
  border-bottom: 1px solid #ddd;

  .date {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-right: 12px;
    margin-right: 12px;
    border-right: 1px solid #ddd;

    h3 {
      color: red;
      font-weight: normal;
      text-transform: uppercase;
      font-size: 1.5rem;
    }

    h2 {
      margin-top: 8px;
      font-weight: normal;
      font-size: 2rem;
    }
  }
`;
