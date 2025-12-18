import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  useTheme as useMuiTheme,
} from "@mui/material";

import {
  DARK_RGBA,
  HERO_IMAGES,
  LIGHT_RGBA,
  SLIDESHOW_INTERVAL,
} from "../utils/constants";
import { useLanguage } from "./LanguageProvider";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();
  const theme = useMuiTheme();
  const isDark = theme.palette.mode === "dark";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, SLIDESHOW_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "calc(100vh - 110px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Slideshow Background */}
      {HERO_IMAGES.map((image, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: currentSlide === index ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
            zIndex: 0,
          }}
        />
      ))}

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: isDark
            ? `linear-gradient(180deg, ${DARK_RGBA.bg70} 0%, ${DARK_RGBA.bg85} 100%)`
            : `linear-gradient(180deg, ${LIGHT_RGBA.bg60} 0%, ${LIGHT_RGBA.bg80} 100%)`,
          zIndex: 1,
        }}
      />

      {/* Decorative Pattern Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${isDark ? "%23C9A050" : "%232D5A47"}' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm0-20c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zM10 30c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.5,
          zIndex: 2,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",

          gap: 5,
          mt: 6,
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            position: "relative",
            zIndex: 3,
            textAlign: "center",
            px: { xs: 3, sm: 4 },
          }}
        >
          {/* Decorative Line */}
          <Box
            sx={{
              width: 60,
              height: 2,
              backgroundColor: "secondary.main",
              mx: "auto",
              mb: { xs: 1.5, sm: 3 },
            }}
          />

          {/* Main Title */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
              fontWeight: 500,
              lineHeight: 1.1,
              mb: { xs: 1.5, sm: 3 },
              color: "text.primary",
            }}
          >
            {t.heroTitle}
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              maxWidth: 600,
              mx: "auto",
              color: "text.secondary",
              fontSize: { xs: "1rem", sm: "1.25rem" },
              lineHeight: { xs: 1.6, sm: 1.8 },
              mb: { xs: 2, sm: 4 },
            }}
          >
            {t.heroDescription}
          </Typography>

          {/* Slide Indicators */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              mt: { xs: 3, sm: 6 },
            }}
          >
            {HERO_IMAGES.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentSlide(index)}
                sx={{
                  width: currentSlide === index ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor:
                    currentSlide === index
                      ? "secondary.main"
                      : "text.secondary",
                  opacity: currentSlide === index ? 1 : 0.4,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    opacity: 0.8,
                  },
                }}
              />
            ))}
          </Box>
        </Container>

        {/* Scroll Indicator - Unified Gecko with Arrow */}
        <Box
          sx={{
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: 0, sm: 0.5 },
            animation: "scrollIndicator 2.5s ease-in-out infinite",
            "@keyframes scrollIndicator": {
              "0%, 100%": { transform: "translateY(0)" },
              "50%": { transform: "translateY(6px)" },
            },
          }}
        >
          {/* Gecko PNG Image */}
          <Box
            component="img"
            src={`${import.meta.env.BASE_URL}gecko.png`}
            alt="Scroll indicator"
            sx={{
              width: { xs: 45, sm: 55 },
              height: "auto",
              opacity: 0.75,
              filter:
                "brightness(0) saturate(100%) invert(70%) sepia(50%) saturate(400%) hue-rotate(10deg) brightness(90%)",
            }}
          />

          {/* Arrow Down Icon - matching style */}
          <Box
            component="svg"
            viewBox="0 0 24 24"
            sx={{
              width: { xs: 16, sm: 18 },
              height: { xs: 16, sm: 18 },
              fill: "none",
              stroke: "#C9A050",
              strokeWidth: 2.5,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.75,
              mt: { xs: -1, sm: -0.5 },
              ml: 0.5,
            }}
          >
            <path d="M7 10l5 5 5-5" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
