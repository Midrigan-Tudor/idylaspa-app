import { useEffect, useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Modal,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme as useMuiTheme,
} from "@mui/material";

import {
  BOOKING_URL,
  COLORS,
  DARK_RGBA,
  FONTS,
  LIGHT_RGBA,
  SCROLL_THRESHOLD,
} from "../utils/constants";
import { useLanguage } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const { mode, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const isDark = mode === "dark";

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          transition: "all 0.3s ease-in-out",
          backgroundColor: isScrolled
            ? isDark
              ? DARK_RGBA.bg85
              : LIGHT_RGBA.bg85
            : isDark
              ? DARK_RGBA.bg95
              : LIGHT_RGBA.bg95,
          backdropFilter: "blur(10px)",
          color: isDark ? COLORS.lightText : COLORS.darkTextPrimary,
        }}
      >
        <Toolbar
          sx={{
            px: { xs: 2, sm: 4, md: 8 },
            py: 1,
            justifyContent: "space-between",
          }}
        >
          {/* Logo and Salon Name */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              component="img"
              src="/idyla-logo.png"
              alt="Idyla Spa Logo"
              sx={{
                height: { xs: 48, sm: 56 },
                width: "auto",
                // Make the logo golden colored with glow to thicken lines
                filter:
                  "brightness(0) saturate(100%) invert(72%) sepia(32%) saturate(640%) hue-rotate(6deg) brightness(92%) contrast(89%) drop-shadow(0 0 1px #C9A050) drop-shadow(0 0 1px #C9A050) drop-shadow(0 0 0.5px #C9A050)",
              }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontFamily: FONTS.playfair,
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
                fontWeight: 600,
                letterSpacing: "0.15em",
                lineHeight: 1.2,
                color: "secondary.main",
              }}
            >
              IDYLA SPA
            </Typography>
          </Box>

          {/* Right side controls */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 0.8, sm: 1.5 },
            }}
          >
            {/* Booking Button */}
            <Button
              variant="contained"
              onClick={handleOpenBooking}
              startIcon={!isMobile ? <CalendarMonthIcon /> : undefined}
              sx={{
                backgroundColor: "secondary.main",
                color: COLORS.darkText,
                fontFamily: FONTS.cormorant,
                fontSize: { xs: "0.8rem", sm: "0.9rem" },
                fontWeight: 500,
                letterSpacing: "0.05em",
                px: { xs: 2, sm: 3 },
                py: 1,
                borderRadius: 2,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "secondary.dark",
                },
              }}
            >
              {t.bookAppointment}
            </Button>

            {/* Theme Toggle */}
            <IconButton
              onClick={toggleTheme}
              aria-label="Toggle theme"
              sx={{
                color: "inherit",
                border: 1,
                borderColor: isDark ? "secondary.main" : "primary.main",
                borderRadius: 2,
                padding: { xs: 0.6, sm: 0.8 },
                "&:hover": {
                  backgroundColor: isDark
                    ? DARK_RGBA.gold10
                    : LIGHT_RGBA.gold10,
                },
              }}
            >
              {isDark ? (
                <LightModeIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
              ) : (
                <DarkModeIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
              )}
            </IconButton>

            {/* Language Toggle */}
            <IconButton
              onClick={toggleLanguage}
              aria-label="Toggle language"
              sx={{
                color: "inherit",
                border: 1,
                borderColor: isDark ? "secondary.main" : "primary.main",
                borderRadius: 2,
                padding: { xs: 0.6, sm: 0.8 },
                "&:hover": {
                  backgroundColor: isDark
                    ? DARK_RGBA.gold10
                    : LIGHT_RGBA.gold10,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 10, sm: 12 },
                  fontWeight: 600,
                  textTransform: "uppercase",
                  minWidth: { xs: 18, sm: 20 },
                }}
              >
                {language === "ro" ? "EN" : "RO"}
              </Typography>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Booking Modal - Clean Google Calendar view */}
      <Modal
        open={isBookingOpen}
        onClose={handleCloseBooking}
        aria-labelledby="booking-modal"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", sm: "95%", md: "90%", lg: "1000px" },
            height: { xs: "100%", sm: "90vh", md: "85vh" },
            maxHeight: { xs: "100%", sm: "800px" },
            backgroundColor: COLORS.lightPaper,
            borderRadius: { xs: 0, sm: 3 },
            boxShadow: 24,
            overflow: "hidden",
            outline: "none",
          }}
        >
          {/* Header with Close Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              px: 1,
              py: 0.5,
              backgroundColor: COLORS.lightPaper,
              borderBottom: `1px solid ${LIGHT_RGBA.gold20}`,
              flexShrink: 0,
            }}
          >
            <IconButton
              onClick={handleCloseBooking}
              aria-label="Close booking modal"
              sx={{
                color: COLORS.darkTextPrimary,
                "&:hover": {
                  backgroundColor: LIGHT_RGBA.gold10,
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* iframe showing Google Calendar */}
          <Box
            component="iframe"
            src={BOOKING_URL}
            sx={{
              width: "100%",
              flex: 1,
              border: "none",
              display: "block",
              // backgroundColor: "rgba(0, 0, 0, 0.80)",

              // "&:BCRc3d": {
              //   backgroundColor: "rgb(217, 0, 0) !important",
              // },
            }}
            title="Book an appointment"
          />
        </Box>
      </Modal>
    </>
  );
};

export default Header;
