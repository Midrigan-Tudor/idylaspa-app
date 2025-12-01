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
        minHeight: "100vh",
        pb: 8, // Padding bottom to account for fixed footer
      }}
    >
      <Header />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
