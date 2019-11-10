import styled, { css } from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Container = styled.div`
  padding: 32px 16px;
  max-width: 800px;
  margin: 0 auto;

  section {
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 24px 56px;
    border: 1px solid #ddd;

    h1 {
      font-size: 1.8rem;
    }

    span {
      color: #888;
      font-size: 1rem;
    }

    .details {
      li {
        display: flex;
        align-items: center;

        & + li {
          margin-top: 16px;
        }

        svg {
          margin-right: 8px;
        }
      }
    }
  }

  .button {
    width: 100%;
    margin: 16px auto;
    text-align: center;

    button {
      border: none;
      width: 100%;
      background: ${colors.primary};
      border-radius: 8px;
      padding: 8px;
      color: #fff;
      text-transform: uppercase;
      font-size: 20px;
      font-weight: bold;

      &:hover {
        background: ${darken(0.3, colors.primary)};
        transition: background 0.3s;
      }

      svg {
        margin-right: 8px;
      }
    }
  }
`;

export const Tittle = styled.div`
  display: flex;
  width: 100%;
  padding: 0 0 16px 0;
  border-bottom: 1px solid #ddd;
  align-items: flex-end;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: flex-end;
  }

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

export const FavoriteButton = styled.button`
  border: none;
  background: #777;
  color: #fff;
  border-radius: 8px;
  padding: 10px 12px;
  width: 100%;
  max-width: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${props =>
    props.favorite &&
    css`
      background: ${colors.primary};
      justify-content: center;

      p {
        display: none;
      }
    `}

  p {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
  }

  @media (max-width: 900px) {
    background: none;
    padding: 0;
    justify-content: center;

    &:hover {
      svg {
        fill: ${colors.primary};
      }
    }

    svg {
      fill: #777;
      width: 40px;
      height: 40px;
    }

    p {
      display: none;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export const Promoter = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    color: #888;
  }

  div {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;

    h4 {
      font-size: 18px;
      color: #222;
    }

    > div {
      margin-left: 8px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      .stars {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
      }
    }
  }
`;
