import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Box,
  Container,
  Divider,
  IconButton,
  Link,
  Typography,
  useTheme as useMuiTheme,
} from "@mui/material";

import { useLanguage } from "./LanguageProvider";
import { DARK_RGBA, LIGHT_RGBA, SOCIAL_URLS } from "../utils/constants";

const Footer = () => {
  const { t } = useLanguage();
  const theme = useMuiTheme();
  const isDark = theme.palette.mode === "dark";

  const socialLinks = [
    {
      icon: <InstagramIcon />,
      url: SOCIAL_URLS.instagram,
      label: "Instagram",
    },
    {
      icon: <FacebookIcon />,
      url: SOCIAL_URLS.facebook,
      label: "Facebook",
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: isDark ? DARK_RGBA.bg95 : LIGHT_RGBA.bg95,
        backdropFilter: "blur(10px)",
        borderTop: `1px solid ${isDark ? DARK_RGBA.gold20 : LIGHT_RGBA.green20}`,
        zIndex: (theme) => theme.zIndex.appBar,
        py: { xs: 2, sm: 2.5 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-start" },
            gap: { xs: 2, md: 0 },
          }}
        >
          {/* Location */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <LocationOnIcon sx={{ color: "secondary.main", fontSize: 20 }} />
            <Box>
              <Typography
                variant="caption"
                sx={{
                  color: "text.secondary",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontSize: "0.65rem",
                }}
              >
                {t.location}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.primary",
                  fontSize: { xs: "0.85rem", sm: "0.9rem" },
                }}
              >
                Strada Exemplu 123, București
              </Typography>
            </Box>
          </Box>

          {/* Contact */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", sm: "row" },
              alignItems: "center",
              gap: { xs: 2, sm: 3 },
            }}
          >
            <Link
              href="tel:+40712345678"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "text.primary",
                textDecoration: "none",
                "&:hover": {
                  color: "secondary.main",
                },
              }}
            >
              <PhoneIcon sx={{ fontSize: 18, color: "secondary.main" }} />
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "0.85rem", sm: "0.9rem" } }}
              >
                +40 712 345 678
              </Typography>
            </Link>

            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: isDark ? DARK_RGBA.gold30 : LIGHT_RGBA.green30,
                display: { xs: "none", sm: "block" },
              }}
            />

            <Link
              href="mailto:contact@idylaspa.ro"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "text.primary",
                textDecoration: "none",
                "&:hover": {
                  color: "secondary.main",
                },
              }}
            >
              <EmailIcon sx={{ fontSize: 18, color: "secondary.main" }} />
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.85rem", sm: "0.9rem" },
                  display: { xs: "none", sm: "block" },
                }}
              >
                contact@idylaspa.ro
              </Typography>
            </Link>
          </Box>

          {/* Social Media */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontSize: "0.65rem",
                mr: 1,
                display: { xs: "none", sm: "block" },
              }}
            >
              {t.followUs}
            </Typography>
            {socialLinks.map((social) => (
              <IconButton
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                sx={{
                  color: "text.primary",
                  border: 1,
                  borderColor: isDark ? DARK_RGBA.gold30 : LIGHT_RGBA.green30,
                  borderRadius: 2,
                  padding: 0.8,
                  "&:hover": {
                    backgroundColor: isDark
                      ? DARK_RGBA.gold10
                      : LIGHT_RGBA.green10,
                    borderColor: "secondary.main",
                    color: "secondary.main",
                  },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* Copyright - hidden on mobile */}
        <Typography
          variant="caption"
          sx={{
            display: { xs: "none", md: "block" },
            textAlign: "center",
            color: "text.secondary",
            mt: 1.5,
            fontSize: "0.7rem",
            letterSpacing: "0.05em",
          }}
        >
          © {new Date().getFullYear()} IDYLA SPA. {t.allRightsReserved}.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
