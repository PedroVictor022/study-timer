import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
   body {
      background: #222;
      color: #fff;
      -webkit-font-smoothing: antialiased;
   }
   body, input, textarea, button {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 400;
      font-size: 1rem;
   }
`;