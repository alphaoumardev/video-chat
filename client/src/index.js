import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {ThemeProvider} from "./context";
import {ContextProvider} from './Socket'
ReactDOM.render(
  <ThemeProvider>
      <ContextProvider>
          <App />
      </ContextProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
