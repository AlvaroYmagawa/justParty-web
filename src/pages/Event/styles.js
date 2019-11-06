import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px 16px;
  max-width: 800px;
  margin: 0 auto;

  section {
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 24px;
    border: 1px solid #ddd;

    h1 {
      font-size: 1.8rem;
    }

    span {
      color: #888;
      font-size: 1rem;
    }

    ul {
      li {
        margin-top: 24px;
        display: flex;
        align-items: center;

        svg {
          margin-right: 8px;
        }
      }
    }
  }
`;

export const Tittle = styled.div`
  display: flex;
  width: 100%;
  padding: 16px 0;
  align-items: flex-start;
  border-bottom: 1px solid #ddd;

  .date {
    display: flex;
    align-items: center;
    margin-right: 32px;
    flex-direction: column;

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
