import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SpaIcon from "@mui/icons-material/Spa";
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  useTheme as useMuiTheme,
} from "@mui/material";

import { useLanguage } from "./LanguageProvider";
import { COLORS, DARK_RGBA, LIGHT_RGBA } from "../utils/constants";

const services = [
  {
    id: 1,
    duration: 60,
    price: 180,
    icon: "🌺",
  },
  {
    id: 2,
    duration: 75,
    price: 220,
    icon: "🪨",
  },
  {
    id: 3,
    duration: 60,
    price: 200,
    icon: "💆",
  },
  {
    id: 4,
    duration: 90,
    price: 250,
    icon: "🌸",
  },
  {
    id: 5,
    duration: 45,
    price: 120,
    icon: "🦶",
  },
  {
    id: 6,
    duration: 120,
    price: 350,
    icon: "👑",
  },
];

const ServicesSection = () => {
  const { t } = useLanguage();
  const theme = useMuiTheme();
  const isDark = theme.palette.mode === "dark";

  const getServiceData = (id: number) => {
    switch (id) {
      case 1:
        return { name: t.service1Name, desc: t.service1Desc };
      case 2:
        return { name: t.service2Name, desc: t.service2Desc };
      case 3:
        return { name: t.service3Name, desc: t.service3Desc };
      case 4:
        return { name: t.service4Name, desc: t.service4Desc };
      case 5:
        return { name: t.service5Name, desc: t.service5Desc };
      case 6:
        return { name: t.service6Name, desc: t.service6Desc };
      default:
        return { name: "", desc: "" };
    }
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        backgroundColor: isDark ? COLORS.darkBg : COLORS.lightBg,
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 80%, ${isDark ? DARK_RGBA.gold03 : LIGHT_RGBA.green03} 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${isDark ? DARK_RGBA.gold03 : LIGHT_RGBA.green03} 0%, transparent 50%)`,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
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

          {/* Decorative Divider */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              mt: 4,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 1,
                background: `linear-gradient(90deg, transparent, ${isDark ? DARK_RGBA.gold50 : LIGHT_RGBA.green50})`,
              }}
            />
            <Typography sx={{ color: "secondary.main", fontSize: "1.2rem" }}>
              ❧
            </Typography>
            <Box
              sx={{
                width: 40,
                height: 1,
                background: `linear-gradient(90deg, ${isDark ? DARK_RGBA.gold50 : LIGHT_RGBA.green50}, transparent)`,
              }}
            />
          </Box>
        </Box>

        {/* Services Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: { xs: 2, md: 3 },
          }}
        >
          {services.map((service) => {
            const data = getServiceData(service.id);
            return (
              <Card
                key={service.id}
                sx={{
                  backgroundColor: isDark
                    ? DARK_RGBA.card60
                    : LIGHT_RGBA.card80,
                  border: `1px solid ${isDark ? DARK_RGBA.gold15 : LIGHT_RGBA.green15}`,
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    borderColor: "secondary.main",
                    transform: "translateY(-4px)",
                    boxShadow: isDark
                      ? `0 12px 24px ${DARK_RGBA.shadow30}`
                      : `0 12px 24px ${LIGHT_RGBA.shadow08}`,
                    "& .service-icon": {
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  {/* Icon and Title Row */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box
                      className="service-icon"
                      sx={{
                        fontSize: "2rem",
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
                          fontSize: { xs: "1rem", md: "1.1rem" },
                          lineHeight: 1.3,
                        }}
                      >
                        {data.name}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      mb: 3,
                      lineHeight: 1.6,
                      fontSize: "0.95rem",
                    }}
                  >
                    {data.desc}
                  </Typography>

                  {/* Footer with Duration and Price */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      pt: 2,
                      borderTop: `1px solid ${isDark ? DARK_RGBA.gold10 : LIGHT_RGBA.green10}`,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      <AccessTimeIcon
                        sx={{
                          fontSize: 16,
                          color: "text.secondary",
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          fontSize: "0.85rem",
                        }}
                      >
                        {service.duration} {t.minutes}
                      </Typography>
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        color: "secondary.main",
                        fontWeight: 700,
                        fontSize: "1.25rem",
                      }}
                    >
                      {service.price} RON
                    </Typography>
                  </Box>
                </CardContent>

                {/* Decorative Corner */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -20,
                    right: -20,
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: isDark
                      ? DARK_RGBA.gold05
                      : LIGHT_RGBA.green05,
                  }}
                />
              </Card>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
