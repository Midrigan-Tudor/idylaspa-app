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

      {/* Floating decorative circles */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: { xs: 60, md: 120 },
          height: { xs: 60, md: 120 },
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(201, 160, 80, 0.15) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(45, 90, 71, 0.12) 0%, transparent 70%)",
          filter: "blur(20px)",
          animation: "floatSlow 12s ease-in-out infinite",
          zIndex: 2,
          "@keyframes floatSlow": {
            "0%, 100%": { transform: "translate(0, 0) scale(1)" },
            "33%": { transform: "translate(15px, -20px) scale(1.1)" },
            "66%": { transform: "translate(-10px, 10px) scale(0.95)" },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "60%",
          right: "8%",
          width: { xs: 80, md: 150 },
          height: { xs: 80, md: 150 },
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(201, 160, 80, 0.12) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(45, 90, 71, 0.1) 0%, transparent 70%)",
          filter: "blur(25px)",
          animation: "floatMedium 10s ease-in-out infinite",
          zIndex: 2,
          "@keyframes floatMedium": {
            "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
            "50%": { transform: "translate(-20px, -15px) rotate(180deg)" },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          left: "15%",
          width: { xs: 40, md: 80 },
          height: { xs: 40, md: 80 },
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(201, 160, 80, 0.18) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(45, 90, 71, 0.15) 0%, transparent 70%)",
          filter: "blur(15px)",
          animation: "floatFast 8s ease-in-out infinite",
          zIndex: 2,
          "@keyframes floatFast": {
            "0%, 100%": { transform: "translateY(0) scale(1)" },
            "50%": { transform: "translateY(-25px) scale(1.15)" },
          },
        }}
      />

      {/* Glowing orbs */}
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          left: "3%",
          width: { xs: 100, md: 180 },
          height: { xs: 100, md: 180 },
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(201, 160, 80, 0.2) 0%, rgba(201, 160, 80, 0.05) 40%, transparent 70%)"
            : "radial-gradient(circle, rgba(45, 90, 71, 0.15) 0%, rgba(45, 90, 71, 0.04) 40%, transparent 70%)",
          filter: "blur(30px)",
          animation: "orbPulse 6s ease-in-out infinite",
          zIndex: 2,
          "@keyframes orbPulse": {
            "0%, 100%": { transform: "scale(1)", opacity: 0.8 },
            "50%": { transform: "scale(1.2)", opacity: 1 },
          },
        }}
      />

      {/* Floating lotus flowers - elegant outlined design */}
      {[
        { left: "3%", size: 45, delay: "0s", duration: 18 },
        { left: "12%", size: 30, delay: "2s", duration: 14 },
        { left: "22%", size: 40, delay: "4s", duration: 20 },
        { left: "32%", size: 25, delay: "1s", duration: 13 },
        { left: "42%", size: 35, delay: "3s", duration: 17 },
        { left: "52%", size: 28, delay: "5s", duration: 15 },
        { left: "62%", size: 50, delay: "0.5s", duration: 22 },
        { left: "72%", size: 22, delay: "2.5s", duration: 14 },
        { left: "82%", size: 38, delay: "4.5s", duration: 19 },
        { left: "8%", size: 20, delay: "6s", duration: 12 },
        { left: "48%", size: 42, delay: "7s", duration: 21 },
        { left: "92%", size: 32, delay: "1.5s", duration: 16 },
      ].map((lotus, index) => (
        <Box
          key={`lotus-${index}`}
          component="svg"
          viewBox="0 0 100 100"
          sx={{
            position: "absolute",
            left: lotus.left,
            bottom: "-10%",
            width: { xs: lotus.size * 0.6, md: lotus.size },
            height: { xs: lotus.size * 0.6, md: lotus.size },
            zIndex: 2,
            animation: `lotusFloat ${lotus.duration}s ease-in-out infinite`,
            animationDelay: lotus.delay,
            "@keyframes lotusFloat": {
              "0%": {
                transform: "translateY(0) translateX(0) rotate(0deg) scale(0)",
                opacity: 0,
              },
              "10%": {
                opacity: 0.4,
                transform:
                  "translateY(-10vh) translateX(15px) rotate(20deg) scale(1)",
              },
              "30%": {
                transform:
                  "translateY(-30vh) translateX(-20px) rotate(60deg) scale(1.1)",
              },
              "50%": {
                transform:
                  "translateY(-50vh) translateX(25px) rotate(120deg) scale(1)",
                opacity: 0.35,
              },
              "70%": {
                transform:
                  "translateY(-70vh) translateX(-15px) rotate(180deg) scale(0.9)",
                opacity: 0.25,
              },
              "90%": {
                opacity: 0.1,
              },
              "100%": {
                transform:
                  "translateY(-115vh) translateX(10px) rotate(240deg) scale(0.5)",
                opacity: 0,
              },
            },
          }}
        >
          {/* 8-petal lotus flower - outlined elegant design */}
          {/* Outer petals - 4 petals at 0, 90, 180, 270 degrees */}
          {[0, 90, 180, 270].map((angle) => (
            <path
              key={`outer-${angle}`}
              d="M50 50 Q35 30 50 8 Q65 30 50 50"
              fill="none"
              stroke="#C9A050"
              strokeWidth="1.5"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
          {/* Inner petals - 4 petals at 45, 135, 225, 315 degrees */}
          {[45, 135, 225, 315].map((angle) => (
            <path
              key={`inner-${angle}`}
              d="M50 50 Q38 35 50 15 Q62 35 50 50"
              fill="none"
              stroke="#C9A050"
              strokeWidth="1.5"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
          {/* Center circle */}
          <circle cx="50" cy="50" r="8" fill="#C9A050" opacity="0.6" />
        </Box>
      ))}

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
