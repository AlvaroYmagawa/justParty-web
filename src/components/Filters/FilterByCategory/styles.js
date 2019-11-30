import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import colors from '~/styles/colors';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.div`
  width: 170px;
  position: relative;
  display: flex;
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${colors.border};
  padding: 8px 0 8px 16px;
  background: #eee;

  ${props =>
    props.visible &&
    css`
      border-radius: 4px 4px 0 0;
      background: #fff;
    `}

  svg {
    height: 17px;
    width: 17px;
    fill: ${colors.span};
    margin-right: 8px;
  }

  input {
    width: 130px;
    border: none;
    background: none;

    &::placeholder {
      color: ${colors.span};
    }
  }
`;

export const Categories = styled.ul`
  position: absolute;
  width: 170px;
  left: calc(50% - 85px);
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
