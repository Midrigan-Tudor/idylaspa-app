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
  SvgIcon,
  Typography,
  useTheme as useMuiTheme,
} from "@mui/material";

import { DARK_RGBA, LIGHT_RGBA, SOCIAL_URLS } from "../utils/constants";
import { useLanguage } from "./LanguageProvider";

import type { SvgIconProps } from "@mui/material";

const TikTokIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </SvgIcon>
);

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
    {
      icon: <TikTokIcon />,
      url: SOCIAL_URLS.tiktok,
      label: "TikTok",
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
        borderTop: `1px solid ${isDark ? DARK_RGBA.gold20 : LIGHT_RGBA.gold20}`,
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
          <Link
            href="https://maps.app.goo.gl/dJdDzw77F13aup2V8"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              textAlign: { xs: "center", md: "left" },
              textDecoration: "none",
              "&:hover": {
                "& .MuiTypography-root": {
                  color: "secondary.main",
                },
              },
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
                  transition: "color 0.2s ease",
                }}
              >
                {t.location}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.primary",
                  fontSize: { xs: "0.85rem", sm: "0.9rem" },
                  transition: "color 0.2s ease",
                }}
              >
                Bulevardul Republicii 2, Shopping Center, Bistrița
              </Typography>
            </Box>
          </Link>

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
              href="tel:+40737058787"
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
                +40 737 058 787
              </Typography>
            </Link>

            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: isDark ? DARK_RGBA.gold30 : LIGHT_RGBA.gold30,
                display: { xs: "none", sm: "block" },
              }}
            />

            <Link
              href="mailto:idylaspa@gmail.com"
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
                idylaspa@gmail.com
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
                  color: "secondary.main",
                  border: 1,
                  borderColor: isDark ? DARK_RGBA.gold30 : LIGHT_RGBA.gold30,
                  borderRadius: 2,
                  padding: 0.8,
                  "&:hover": {
                    backgroundColor: isDark
                      ? DARK_RGBA.gold10
                      : LIGHT_RGBA.gold10,
                    borderColor: "secondary.light",
                    color: "secondary.light",
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
          © {new Date().getFullYear()} Idyla Spa. {t.allRightsReserved}.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
