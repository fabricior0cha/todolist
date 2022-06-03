import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline, Paper } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const Content = styled("div")`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  background-color: #676767;
`;

const Main = styled("main")`
  flex-grow: 1;
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <Content>
      <Main>
        <App />
      </Main>
    </Content>
  </React.StrictMode>
);
