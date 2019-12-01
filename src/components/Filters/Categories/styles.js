import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import colors from '~/styles/colors';

export const Container = styled.div`
  position: relative;
  width: 80%;
`;

export const Badge = styled.div`
  background: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: none;
  border-bottom: 1px solid
    ${props => (props.visible ? colors.accent : colors.span)};

  input {
    background: none;
    width: 70%;
    border: none;
    color: #000;
  }

  ${props =>
    props.visible &&
    css`
      border-radius: 4px 4px 0 0;
      background: #fff;
    `}

  svg {
    justify-self: flex-end;
    height: 17px;
    width: 17px;
    fill: ${props => (props.visible ? colors.accent : colors.span)};
    margin-right: 8px;
  }
`;

export const Categories = styled.ul`
  position: absolute;
  width: 100%;
  left: calc(50% - 50%);
  background: #fff;
  border: 1px solid ${colors.border};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  display: ${props => (props.visible ? 'flex' : 'none')};
`;

export const Scroll = styled(PerfectScrollbar)`
  width: 100%;
  max-height: 150px;
  border-bottom: 1px solid ${colors.border};

  ul {
    li {
      button {
        width: 100%;
        border: none;
        background: none;
        text-align: left;
        color: ${colors.text};
        padding: 8px 16px;
        font-weight: bold;

        &:hover {
          background: #eee;
          transition: background 0.3s;
        }
      }

      & + li {
        border-top: 1px solid ${colors.border};
      }
    }
  }
`;

export const Category = styled.li`
  width: 100%;

  button {
    width: 100%;
    background: none;
    border: none;
    color: ${colors.text};

    &:hover {
      background: #eee;
      transition: background 0.3s;
    }
  }
`;
