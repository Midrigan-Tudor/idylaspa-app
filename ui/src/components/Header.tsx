import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import { useTheme } from "./ThemeProvider";

const Header = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          IDYLASPA
        </Typography>

        <Button
          color="inherit"
          sx={{
            // border: 1,
            // borderColor: "inherit",
            // borderRadius: 3,
            //padding: 0.8,
            ml: 1,
            textTransform: "none",
            fontSize: "12px",
          }}
        >
          Login
        </Button>
        <Tooltip
          title={
            mode === "dark" ? "Switch to light theme" : "Switch to dark theme"
          }
        >
          <IconButton
            color="inherit"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            sx={{
              border: 1,
              borderColor: "inherit",
              borderRadius: 3,
              padding: 0.8,
              ml: 1,
            }}
          >
            {mode === "dark" ? (
              <LightModeIcon sx={{ fontSize: 20 }} />
            ) : (
              <DarkModeIcon sx={{ fontSize: 20 }} />
            )}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
