import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: `300px 1fr`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Outlet />
    </Grid>
  );
};

export default Layout;
