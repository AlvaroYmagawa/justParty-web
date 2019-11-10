import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 30px;

  header {
    width: 100%;
    font-weight: 100;
  }
`;

export const EventList = styled.ul`
  display: flex;
  margin-top: 32px;

  li {
    width: 100%;
    border-radius: 12px;
    background: #fff;
    box-shadow: 2px 2px 8px #00000077;
    max-width: 400px;

    & + li {
      margin-left: 16px;
    }

    .description {
      padding: 12px;

      h3 {
        font-size: 20px;
        margin-bottom: 4px;
      }

      span {
        color: #777;
        font-size: 14px;
      }
    }
  }
`;
