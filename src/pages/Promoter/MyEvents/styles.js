import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 40px;

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
    border-radius: 4px;
    border: 1px solid ${colors.border};
    background: #fff;

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
