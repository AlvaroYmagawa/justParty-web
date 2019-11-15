import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: absolute;
  background: #fff;
  display: ${props => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  width: 320px;
  margin: 145px 8% 0 0;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

  section {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid #ccc;

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      p {
        font-weight: bold;
        margin-bottom: 5px;
        color: #000;
      }

      span {
        color: #888;
      }
    }
  }
`;

export const Exit = styled(Link)`
  display: flex;
  background: #eee;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
  padding: 10px 20px;

  .exit {
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #555;
    background: none;
    padding: 7px 15px;
    &:hover {
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    }
  }
`;
