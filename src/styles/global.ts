import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

	body {
		font-size: 16px;
    -webkit-font-smoothing: antialiased;
    background: #FFFFFF;
    font-family: 'Montserrat', sans-serif;
  }

	input, button {
    font: 16px Montserrat, sans-serif;
  }
`;
