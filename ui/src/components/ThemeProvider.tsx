import { createContext, useContext, useMemo, useState } from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";

import { COLORS, DARK_RGBA, FONTS } from "../utils/constants";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

// Balinese-inspired color palette
const balineseColors = {
  // Primary - Deep jungle green
  primary: {
    main: COLORS.primaryMain,
    light: COLORS.primaryLight,
    dark: COLORS.primaryDark,
    contrastText: COLORS.lightText,
  },
  // Secondary - Warm gold/amber
  secondary: {
    main: COLORS.secondaryMain,
    light: COLORS.secondaryLight,
    dark: COLORS.secondaryDark,
    contrastText: COLORS.darkText,
  },
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>("dark");

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: balineseColors.primary,
          secondary: balineseColors.secondary,
          ...(mode === "light"
            ? {
                background: {
                  default: COLORS.lightBg,
                  paper: COLORS.lightPaper,
                },
                text: {
                  primary: COLORS.darkTextPrimary,
                  secondary: "#5A4D3A",
                },
              }
            : {
                background: {
                  default: COLORS.darkBg,
                  paper: COLORS.darkPaper,
                },
                text: {
                  primary: COLORS.lightText,
                  secondary: "#C4BAA8",
                },
              }),
        },
        typography: {
          fontFamily: FONTS.cormorant,
          h1: {
            fontFamily: FONTS.playfair,
            fontWeight: 500,
            letterSpacing: "0.02em",
          },
          h2: {
            fontFamily: FONTS.playfair,
            fontWeight: 500,
            letterSpacing: "0.02em",
          },
          h3: {
            fontFamily: FONTS.playfair,
            fontWeight: 500,
          },
          h4: {
            fontFamily: FONTS.playfair,
            fontWeight: 500,
          },
          h5: {
            fontFamily: FONTS.cormorant,
            fontWeight: 600,
          },
          h6: {
            fontFamily: FONTS.cormorant,
            fontWeight: 600,
          },
          body1: {
            fontFamily: FONTS.cormorant,
            fontSize: "1.1rem",
            lineHeight: 1.7,
          },
          body2: {
            fontFamily: FONTS.cormorant,
            fontSize: "1rem",
            lineHeight: 1.6,
          },
          button: {
            fontFamily: FONTS.cormorant,
            fontWeight: 600,
            letterSpacing: "0.05em",
          },
        },
        shape: {
          borderRadius: 4,
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
                padding: "10px 24px",
                fontSize: "1rem",
              },
              contained: {
                boxShadow: "none",
                "&:hover": {
                  boxShadow: `0 4px 12px ${DARK_RGBA.shadow15}`,
                },
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                boxShadow: "none",
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                boxShadow: `0 4px 20px ${DARK_RGBA.shadow08}`,
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
