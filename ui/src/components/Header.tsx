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

import { useLanguage } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const { mode, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <AppBar position="static" sx={{ paddingLeft: 12, paddingRight: 12 }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontSize: "16px" }}
        >
          IDYLASPA
        </Typography>

        <Button
          color="inherit"
          sx={{
            ml: 1,
            textTransform: "none",
            fontSize: "14px",
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
        <IconButton
          color="inherit"
          onClick={toggleLanguage}
          aria-label="Toggle language"
          sx={{
            border: 1,
            borderColor: "inherit",
            borderRadius: 3,
            padding: 0.8,
            ml: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            {language === "ro" ? "EN" : "RO"}
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
