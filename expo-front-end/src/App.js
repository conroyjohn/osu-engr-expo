import React from "react";
import { StylesProvider, ThemeProvider } from "@material-ui/styles";
import { CssBaseline, createMuiTheme } from "@material-ui/core";
import styled, {
  ThemeProvider as StyledThemeProvider
} from "styled-components";

import Routes from "./Routes.js";
import Nav from "./components/Nav.js";

// explicitly create the theme, this is so that
// it can be shared with styled-components also
const theme = createMuiTheme({
  //override theme defaults
  palette: { primary: { main: "#d73f09" } }
});

const App = () => {
  return (
    // Tell material-ui to inject its styles first so that
    // styled-components can override/extend the styles, else
    // material-ui will override
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        {/* pass theme to styled-components so it can be used
      (see StyledPaper above) */}
        <StyledThemeProvider theme={theme}>
          <CssBaseline />
          <Nav />
          <Routes />
        </StyledThemeProvider>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
