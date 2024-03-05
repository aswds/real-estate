import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { theme } from "./Theme";
import { router } from "./router";
import { GlobalStyles } from "./styled/Global";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
