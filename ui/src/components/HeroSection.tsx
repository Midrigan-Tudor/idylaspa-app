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
        minHeight: "100vh",
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
            mb: 3,
          }}
        />

        {/* Subtitle */}
        <Typography
          variant="overline"
          sx={{
            color: "secondary.main",
            letterSpacing: "0.3em",
            fontSize: { xs: "0.75rem", sm: "0.85rem" },
            fontWeight: 600,
            display: "block",
            mb: 2,
          }}
        >
          {t.heroSubtitle}
        </Typography>

        {/* Main Title */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
            fontWeight: 500,
            lineHeight: 1.1,
            mb: 3,
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
            fontSize: { xs: "1.1rem", sm: "1.25rem" },
            lineHeight: 1.8,
            mb: 4,
          }}
        >
          {t.heroDescription}
        </Typography>

        {/* Decorative Element */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            mt: 4,
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 1,
              backgroundColor: isDark ? DARK_RGBA.gold50 : LIGHT_RGBA.green50,
            }}
          />
          <Box
            component="span"
            sx={{
              color: "secondary.main",
              fontSize: "1.5rem",
            }}
          >
            ✿
          </Box>
          <Box
            sx={{
              width: 40,
              height: 1,
              backgroundColor: isDark ? DARK_RGBA.gold50 : LIGHT_RGBA.green50,
            }}
          />
        </Box>

        {/* Slide Indicators */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            mt: 6,
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
                  currentSlide === index ? "secondary.main" : "text.secondary",
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

      {/* Scroll Indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: 100,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          animation: "bounce 2s infinite",
          "@keyframes bounce": {
            "0%, 20%, 50%, 80%, 100%": {
              transform: "translateX(-50%) translateY(0)",
            },
            "40%": {
              transform: "translateX(-50%) translateY(-10px)",
            },
            "60%": {
              transform: "translateX(-50%) translateY(-5px)",
            },
          },
        }}
      >
        <Box
          sx={{
            width: 24,
            height: 40,
            border: 2,
            borderColor: isDark ? DARK_RGBA.gold50 : LIGHT_RGBA.green50,
            borderRadius: 12,
            display: "flex",
            justifyContent: "center",
            pt: 1,
          }}
        >
          <Box
            sx={{
              width: 4,
              height: 8,
              backgroundColor: "secondary.main",
              borderRadius: 2,
              animation: "scroll 2s infinite",
              "@keyframes scroll": {
                "0%": { opacity: 1, transform: "translateY(0)" },
                "100%": { opacity: 0, transform: "translateY(16px)" },
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
