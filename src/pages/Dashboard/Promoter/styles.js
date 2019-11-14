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
    align-items: center;
    padding-bottom: 24px;
    border-bottom: 1px solid #ccc;
    font-weight: 100;

    h1 {
      font-weight: 400;
    }
  }
`;

export const EventList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 32px;
  grid-gap: 16px;

  li {
    width: 100%;
    border-radius: 12px;
    background: #fff;
    box-shadow: 2px 2px 8px #00000077;
    max-width: 400px;

    .description {
      display: flex;
      justify-content: space-between;
      padding: 12px;

      div {
        & + div {
          align-self: flex-end;
        }
      }

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

export const Status = styled.div`
  color: ${props => (props.past ? 'red' : 'green')};
  text-transform: uppercase;
  font-weight: bold;
`;
