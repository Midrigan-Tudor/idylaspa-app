import { Box } from "@mui/material";
import { Outlet } from "react-router";

import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          pt: 4,
          px: 4,
          pb: 13, // Padding bottom to account for fixed footer
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
