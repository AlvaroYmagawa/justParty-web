import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 32px auto 32px auto;
  padding: 24px;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
  }
`;

export const Event = styled.li`
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 2px 2px 10px #00000055;
  border-radius: 8px;

  img {
    width: 100%;
    border-radius: 8px 8px 0 0;
  }
`;

export const Description = styled.div`
  display: flex;
  margin-top: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  button {
    border-radius: 8px;
    color: #fff;
    padding: 8px;
    border: 0;
    background: ${colors.primary};

    & :hover {
      background: ${darken(0.5, colors.primary)};
    }
  }

  div {
    h3 {
      font-size: 22px;
      font-weight: 200;
    }

    span {
      color: #777;
    }
  }
`;
