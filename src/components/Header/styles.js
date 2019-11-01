import styled from 'styled-components';

export const Container = styled.div`
  background: #191717;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    font-weight: bold;
    color: #fff;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #444;
    }
  }

  aside {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Profile = styled.div`
  cursor: pointer;
  height: 40px;
  width: 40px;
  background: url(${props => props.src}) center;
  background-size: cover;
  border-radius: 50%;
`;
