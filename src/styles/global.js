import { createGlobalStyle } from 'styled-components';

import colors from '~/styles/colors';
import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:100,400,700');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    background: #eee;
  }

  h1, h2, h3, h4, p{
    color: ${colors.text}
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
