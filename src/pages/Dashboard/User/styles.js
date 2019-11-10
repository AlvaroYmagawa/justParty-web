import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Container = styled.div`
  padding: 40px 8%;

  h1 {
    text-transform: none;
    color: #333;
  }
`;

export const EventList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3%;
  list-style: none;
  width: 100%;
  margin: 0 auto;

  a {
    text-decoration: none;
  }

  li {
    background: #fff;
    margin-top: 16px;
    border-radius: 12px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const Description = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    background: ${colors.primary};
    color: #fff;
    border-radius: 4px;
    padding: 8px;
    font-weight: bold;

    svg {
      margin-right: 8px;
    }

    &:hover {
      background: ${darken(0.2, colors.primary)};
    }
  }

  section {
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
    }
  }

  .date {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-right: 12px;
    margin-right: 12px;
    border-right: 1px solid #bbb;

    h3 {
      color: red;
      font-weight: normal;
      text-transform: uppercase;
      font-size: 0.9rem;
    }

    h2 {
      margin-top: 8px;
      font-weight: normal;
      font-size: 1.5rem;
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
      font-size: 1.5rem;
      color: #222;
      font-weight: normal;
    }

    span {
      max-width: 300px;
      font-size: 14px;
      color: #777;

      a {
        margin-left: 5px;
      }
    }
  }
`;
