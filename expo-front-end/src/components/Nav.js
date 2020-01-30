import React from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

//add styles to an html element
const Root = styled.div`
  flex-grow: 1;
`;

//add new styles or override existing styles of a material ui component
const StyledAppBar = styled(AppBar)`
  box-shadow: none;
`;

const StyledTypography = styled(Typography)`
  flex-grow: 1;
`;

const Nav = () => {
  return (
    <Root>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <StyledTypography variant="h6">Engineering Expo</StyledTypography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </StyledAppBar>
    </Root>
  );
};

export default Nav;
