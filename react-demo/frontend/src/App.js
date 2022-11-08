import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "./Menu";
import FruitPage from "./pages/FruitPage";
import VegetablesPage from "./pages/VegetablesPage";
import AddProductPage from "./pages/AddProductPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffcccc",
      light: "#ffeeee",
      dark: "#ffaaaa",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage />,
  },
  {
    path: "/fruits",
    element: <FruitPage />,
  },
  {
    path: "/vegetables",
    element: <VegetablesPage />,
  },
  {
    path: "/add-product",
    element: <AddProductPage />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              App Name
            </Typography>
          </Toolbar>
        </AppBar>
        <Container sx={{pt: 10}} maxWidth="lg">
          <Grid container spacing={2}>
            <Grid xs={12} md={12} lg={4}>
              <Menu />
            </Grid>
            <Grid sx={{ p: 2 }} xs={12} md={12} lg={8}>
              <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                <RouterProvider router={router} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
