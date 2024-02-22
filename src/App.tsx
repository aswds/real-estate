import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GlobalStyles } from "./styled/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
