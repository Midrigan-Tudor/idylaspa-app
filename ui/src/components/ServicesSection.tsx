import { useEffect, useRef, useState } from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SpaIcon from "@mui/icons-material/Spa";
import {
  Box,
  Card,
  CardContent,
  Container,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme as useMuiTheme,
} from "@mui/material";

import { COLORS, DARK_RGBA, LIGHT_RGBA } from "../utils/constants";
import { useLanguage } from "./LanguageProvider";

const services = [
  {
    id: 1,
    price: 150,
    icon: "🌺",
    recommended: true,
  },
  {
    id: 2,
    price: 150,
    icon: "🐒",
  },
  {
    id: 3,
    price: 150,
    icon: "🏋️‍♂️",
  },
  {
    id: 4,
    price: 150,
    icon: "🌋",
  },
  {
    id: 5,
    price: 150,
    icon: "🌊",
  },
  {
    id: 6,
    price: 150,
    icon: "✨",
  },
  {
    id: 7,
    price: 150,
    icon: "💆",
  },
  {
    id: 8,
    price: 520,
    icon: "📅",
    isSubscription: true,
  },
];

const ServicesSection = () => {
  const { t } = useLanguage();
  const theme = useMuiTheme();
  const isDark = theme.palette.mode === "dark";
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollPosition);
      window.addEventListener("resize", checkScrollPosition);
      return () => {
        scrollContainer.removeEventListener("scroll", checkScrollPosition);
        window.removeEventListener("resize", checkScrollPosition);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth / 3;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const getServiceData = (id: number) => {
    switch (id) {
      case 1:
        return {
          name: t.service1Name,
          desc: t.service1Desc,
          benefits: t.service1Benefits,
        };
      case 2:
        return {
          name: t.service2Name,
          desc: t.service2Desc,
          benefits: t.service2Benefits,
        };
      case 3:
        return {
          name: t.service3Name,
          desc: t.service3Desc,
          benefits: t.service3Benefits,
        };
      case 4:
        return {
          name: t.service4Name,
          desc: t.service4Desc,
          benefits: t.service4Benefits,
        };
      case 5:
        return {
          name: t.service5Name,
          desc: t.service5Desc,
          benefits: t.service5Benefits,
        };
      case 6:
        return {
          name: t.service6Name,
          desc: t.service6Desc,
          benefits: t.service6Benefits,
        };
      case 7:
        return {
          name: t.service7Name,
          desc: t.service7Desc,
          benefits: t.service7Benefits,
        };
      case 8:
        return {
          name: t.service8Name,
          desc: t.service8Desc,
          benefits: t.service8Benefits,
        };
      default:
        return { name: "", desc: "", benefits: "" };
    }
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        backgroundColor: isDark ? COLORS.darkBg : COLORS.lightBg,
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 80%, ${isDark ? DARK_RGBA.gold03 : LIGHT_RGBA.gold03} 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${isDark ? DARK_RGBA.gold03 : LIGHT_RGBA.gold03} 0%, transparent 50%)`,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              mb: 2,
            }}
          >
            <SpaIcon sx={{ color: "secondary.main", fontSize: 28 }} />
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              fontWeight: 500,
              color: "text.primary",
              mb: 2,
            }}
          >
            {t.servicesTitle}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 600,
              mx: "auto",
              fontSize: { xs: "1rem", sm: "1.1rem" },
            }}
          >
            {t.servicesSubtitle}
          </Typography>
        </Box>

        {/* Carousel Container */}
        <Box sx={{ position: "relative" }}>
          {/* Left Arrow - Hidden on mobile */}
          {!isMobile && (
            <IconButton
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              sx={{
                position: "absolute",
                left: { xs: -8, md: -24 },
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                backgroundColor: isDark ? DARK_RGBA.card80 : LIGHT_RGBA.card80,
                border: `1px solid ${isDark ? DARK_RGBA.gold30 : LIGHT_RGBA.gold30}`,
                color: "secondary.main",
                width: { xs: 40, md: 48 },
                height: { xs: 40, md: 48 },
                opacity: canScrollLeft ? 1 : 0.3,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: isDark
                    ? DARK_RGBA.gold20
                    : LIGHT_RGBA.gold20,
                  transform: "translateY(-50%) scale(1.05)",
                },
                boxShadow: isDark
                  ? `0 4px 20px ${DARK_RGBA.shadow30}`
                  : `0 4px 20px ${LIGHT_RGBA.shadow10}`,
              }}
            >
              <ChevronLeftIcon sx={{ fontSize: { xs: 24, md: 32 } }} />
            </IconButton>
          )}

          {/* Right Arrow - Hidden on mobile */}
          {!isMobile && (
            <IconButton
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              sx={{
                position: "absolute",
                right: { xs: -8, md: -24 },
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                backgroundColor: isDark ? DARK_RGBA.card80 : LIGHT_RGBA.card80,
                border: `1px solid ${isDark ? DARK_RGBA.gold30 : LIGHT_RGBA.gold30}`,
                color: "secondary.main",
                width: { xs: 40, md: 48 },
                height: { xs: 40, md: 48 },
                opacity: canScrollRight ? 1 : 0.3,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: isDark
                    ? DARK_RGBA.gold20
                    : LIGHT_RGBA.gold20,
                  transform: "translateY(-50%) scale(1.05)",
                },
                boxShadow: isDark
                  ? `0 4px 20px ${DARK_RGBA.shadow30}`
                  : `0 4px 20px ${LIGHT_RGBA.shadow10}`,
              }}
            >
              <ChevronRightIcon sx={{ fontSize: { xs: 24, md: 32 } }} />
            </IconButton>
          )}

          {/* Scrollable Cards Container - Vertical on mobile, horizontal on desktop */}
          <Box
            ref={isMobile ? undefined : scrollRef}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 2, md: 3 },
              overflowX: { xs: "visible", sm: "auto" },
              scrollSnapType: { xs: "none", sm: "x mandatory" },
              scrollBehavior: "smooth",
              px: { xs: 1, md: 2 },
              py: 2,
              mx: { xs: 0, sm: 4, md: 5 },
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {services.map((service) => {
              const data = getServiceData(service.id);
              const isRecommended =
                "recommended" in service && service.recommended;
              const isSubscription =
                "isSubscription" in service && service.isSubscription;
              return (
                <Card
                  key={service.id}
                  sx={{
                    minWidth: {
                      xs: "100%",
                      sm: "calc(50% - 12px)",
                      md: "calc(33.333% - 16px)",
                    },
                    maxWidth: {
                      xs: "100%",
                      sm: "calc(50% - 12px)",
                      md: "calc(33.333% - 16px)",
                    },
                    flexShrink: 0,
                    scrollSnapAlign: { xs: "none", sm: "start" },
                    backgroundColor: isDark
                      ? DARK_RGBA.card60
                      : LIGHT_RGBA.card80,
                    border: isRecommended
                      ? `2px solid ${isDark ? "#C9A050" : "#B8944A"}`
                      : `1px solid ${isDark ? DARK_RGBA.gold15 : LIGHT_RGBA.gold15}`,
                    borderRadius: 3,
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      borderColor: "secondary.main",
                      transform: "translateY(-6px)",
                      boxShadow: isDark
                        ? `0 16px 32px ${DARK_RGBA.shadow30}`
                        : `0 16px 32px ${LIGHT_RGBA.shadow08}`,
                      "& .service-icon": {
                        transform: "scale(1.15)",
                      },
                    },
                  }}
                >
                  {/* Recommended Badge */}
                  {isRecommended && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        backgroundColor: isDark ? "#C9A050" : "#B8944A",
                        color: "#fff",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      <AutoAwesomeIcon sx={{ fontSize: 14 }} />
                      {t.recommended}
                    </Box>
                  )}

                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    {/* Icon and Title Row */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 2,
                        mb: 3,
                        pr: isRecommended ? { xs: 10, sm: 12 } : 0,
                        pt: isRecommended && isMobile ? 3 : 0,
                      }}
                    >
                      <Box
                        className="service-icon"
                        sx={{
                          fontSize: { xs: "2.5rem", md: "3rem" },
                          transition: "transform 0.3s ease",
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: "text.primary",
                            fontSize: { xs: "1.1rem", md: "1.25rem" },
                            lineHeight: 1.3,
                            mb: 0.5,
                          }}
                        >
                          {data.name}
                        </Typography>
                        {isSubscription && (
                          <Typography
                            variant="caption"
                            sx={{
                              color: "secondary.main",
                              fontWeight: 500,
                              fontSize: "0.85rem",
                            }}
                          >
                            4 masaje la alegere
                          </Typography>
                        )}
                      </Box>
                    </Box>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        mb: 3,
                        lineHeight: 1.7,
                        fontSize: { xs: "0.95rem", md: "1rem" },
                        minHeight: { xs: "auto", md: 80 },
                      }}
                    >
                      {data.desc}
                    </Typography>

                    {/* Benefits */}
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 0.75,
                        mb: 3,
                      }}
                    >
                      {data.benefits.split(", ").map((benefit, index) => (
                        <Box
                          key={index}
                          sx={{
                            backgroundColor: isDark
                              ? DARK_RGBA.gold10
                              : LIGHT_RGBA.gold10,
                            color: "text.secondary",
                            px: 1.25,
                            py: 0.5,
                            borderRadius: 1,
                            fontSize: "0.8rem",
                          }}
                        >
                          {benefit}
                        </Box>
                      ))}
                    </Box>

                    {/* Footer with Price */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        pt: 3,
                        borderTop: `1px solid ${isDark ? DARK_RGBA.gold10 : LIGHT_RGBA.gold10}`,
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          color: "secondary.main",
                          fontWeight: 700,
                          fontSize: { xs: "1.5rem", md: "1.75rem" },
                        }}
                      >
                        {service.price} lei
                      </Typography>
                    </Box>
                  </CardContent>

                  {/* Decorative Corner */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: -30,
                      right: -30,
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      backgroundColor: isDark
                        ? DARK_RGBA.gold05
                        : LIGHT_RGBA.gold05,
                    }}
                  />
                </Card>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
