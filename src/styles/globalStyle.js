import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }

  *:focus{
    outline: 0;
  }

  html, body{
    height: 100%;

  }

  #root {
    min-height: 100vh;
  }

  body{
    -webkit-smoothing: antialiased !important;
  }

  body, button, input {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  button {
    cursor: pointer;
  }

`;
