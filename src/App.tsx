import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button/Button";
import { defaultTheme } from "./styles/theme/default";
import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";
import { Global } from "./Global";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router />
      </ThemeProvider>
      <Global />
    </BrowserRouter>
  );
}

export default App;
