import { useEffect, useRef } from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import {
  Avatar,
  Box,
  Container,
  Link,
  Paper,
  Rating,
  Typography,
  useTheme as useMuiTheme,
} from "@mui/material";

import { DARK_RGBA, FONTS, LIGHT_RGBA } from "../utils/constants";
import { useLanguage } from "./LanguageProvider";

// Review type
interface Review {
  author_name: string;
  rating: number;
  relative_time_description: string;
  text: string;
  profile_photo_url?: string;
}

// ============================================
// YOUR GOOGLE REVIEWS - Updated December 2024
// Source: https://maps.app.goo.gl/tHxfCF87KxQRkm8z8
// ============================================

const REVIEWS: Review[] = [
  {
    author_name: "Oniga Mihai",
    rating: 5,
    relative_time_description: "acum 2 săptămâni",
    text: "Am avut o experiență extraordinară la acest salon de masaj balinez! Atmosfera este relaxantă, personalul foarte profesionist și atent, iar masajul a fost pur și simplu minunat. M-am simțit revitalizat și complet relaxat după sesiune. Recomand din suflet tuturor celor care vor să se deconecteze de stresul zilnic!",
  },
  {
    author_name: "Moldovan Alex",
    rating: 5,
    relative_time_description: "acum o săptămână",
    text: "De la intrare te întâmpină o ambianță plăcută și relaxantă în care te deconectezi de rutina zilnică, iar personalul amabil face ca experiența să fie una unică, relaxantă și te face dornic să te reîntorci. Pe scurt, o oază de relaxare, recomand oricui dorește o sesiune de relaxare autentică în stil balinez.",
  },
  {
    author_name: "Pop Iulia",
    rating: 5,
    relative_time_description: "acum 2 săptămâni",
    text: "Recomand cu mare drag! Totul la superlativ, personal profesionist! Salonul e foarte cochet, locul perfect pt a te relaxa. Mulțumesc pt tot!",
  },
  {
    author_name: "Cata Catalin",
    rating: 5,
    relative_time_description: "acum 2 săptămâni",
    text: "Am fost la un masaj balinez și m-am simțit excelent. Atmosfera e foarte relaxantă, terapeuții profesioniști, iar salonul are și o varietate de meniuri de masaj din care poți alege exact ce ți se potrivește. Am plecat super relaxat. Recomand cu încredere!",
  },
  {
    author_name: "Tudor Midrigan",
    rating: 5,
    relative_time_description: "acum o săptămână",
    text: "O locație foarte frumos aranjata și atmosferica, acompaniata de un masaj foarte plăcut. Doamna care m-a masat este un adevărat pro, cu peste 13 ani de experiență. M-am simțit absolut revigorat după masaj, recomand cu căldură!",
  },
  {
    author_name: "Mateian Lorenaa",
    rating: 5,
    relative_time_description: "acum 6 zile",
    text: "Recomand cu cel mai mare drag!! Am avut o experienta absolut minunata, atmosfera este cu adevarat relaxanta, iar masajul a fost exact pentru nevoile mele. Personalul este profesionist, amabil si atent la nevoile fiecaruia. Cu siguranta o sa revin!",
  },
  {
    author_name: "dani cristian",
    rating: 5,
    relative_time_description: "acum o săptămână",
    text: "Cel mai bun masaj balinez din oraș, tara! Tehnica perfectă, energie incredibilă, atmosferă de vis – m-am topit de relaxare! Best in town, fără discuție! Recomand cu toată inima!",
  },
  {
    author_name: "Ancuta Buda",
    rating: 5,
    relative_time_description: "acum o săptămână",
    text: "A fost o adevărată plăcere! Mâini profesionale, multă răbdare și o atmosferă liniștită care te face să uiți de tot stresul.",
  },
  {
    author_name: "Briana Valasutean",
    rating: 5,
    relative_time_description: "acum 2 săptămâni",
    text: "Experiență excelentă! Personal profesionist, atmosferă relaxantă și tehnici de masaj autentice asiatice. M-am simțit minunat după fiecare ședință. Recomand cu încredere!",
  },
  {
    author_name: "Adelin Ciurdarean",
    rating: 5,
    relative_time_description: "acum o săptămână",
    text: "Personal primitor, masajul a fost peste așteptări și prețuri corecte. Spa-ul de care Bistrița avea nevoie!",
  },
  {
    author_name: "Damian Marica",
    rating: 5,
    relative_time_description: "acum o săptămână",
    text: "Locația e una care iti oferă liniste si relaxare, iar masajul este unul cu totul special, intens si relaxant. Totul este foarte bine organizat. Recomand cu drag oricui!!",
  },
  {
    author_name: "Florin Moldovann",
    rating: 5,
    relative_time_description: "acum o săptămână",
    text: "Am avut parte astazi de un masaj super! M-am simțit excelent după ședință, iar atmosfera este foarte plăcută și relaxantă. Recomand cu încredere!",
  },
];

// Overall rating info
const OVERALL_RATING = 5.0;
const TOTAL_REVIEWS = 32;

// Direct link to your Google Maps reviews
const GOOGLE_MAPS_REVIEWS_URL =
  "https://www.google.com/maps/place/IDYLA+SPA+Masaj+Asiatic/@47.1358268,24.4946548,17z/data=!4m8!3m7!1s0x4749f70027bb0e4b:0x32a5966ac8380a6!8m2!3d47.1358232!4d24.4972297!9m1!1b1!16s%2Fg%2F11yqdfkzvb";

// ============================================

// Google Icon
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" style={{ flexShrink: 0 }}>
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const ReviewsSection = () => {
  const { t } = useLanguage();
  const theme = useMuiTheme();
  const isDark = theme.palette.mode === "dark";
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll animation - infinite loop, never stops
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || REVIEWS.length === 0) return;

    // Use setInterval for constant scrolling
    const scrollInterval = setInterval(() => {
      if (container) {
        // Get half the scroll width (where duplicates start)
        const halfWidth = container.scrollWidth / 2;

        if (halfWidth > 0) {
          container.scrollLeft += 1;
          // Seamlessly reset to beginning when reaching halfway (duplicates)
          if (container.scrollLeft >= halfWidth) {
            container.scrollLeft = 0;
          }
        }
      }
    }, 20); // ~50fps, smooth scrolling

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
        backgroundColor: isDark ? "background.default" : "background.paper",
      }}
    >
      {/* Decorative background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `radial-gradient(circle at 20% 50%, ${theme.palette.secondary.main} 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, ${theme.palette.secondary.main} 0%, transparent 50%)`,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="overline"
            sx={{
              color: "secondary.main",
              letterSpacing: "0.2em",
              fontWeight: 500,
              fontSize: { xs: "0.7rem", md: "0.75rem" },
              display: "block",
              mb: 1,
            }}
          >
            {t.reviewsSubtitle}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: FONTS.playfair,
              fontSize: { xs: "2rem", md: "2.75rem" },
              fontWeight: 400,
              color: "text.primary",
              mb: 3,
            }}
          >
            {t.reviewsTitle}
          </Typography>

          {/* Overall Rating */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  color: "text.primary",
                  lineHeight: 1,
                }}
              >
                {OVERALL_RATING.toFixed(1)}
              </Typography>
              <Rating
                value={OVERALL_RATING}
                precision={0.1}
                readOnly
                size="small"
                icon={<StarIcon fontSize="inherit" sx={{ color: "#FBBC05" }} />}
                emptyIcon={
                  <StarIcon
                    fontSize="inherit"
                    sx={{
                      color: isDark
                        ? "rgba(255,255,255,0.2)"
                        : "rgba(0,0,0,0.15)",
                    }}
                  />
                }
              />
            </Box>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              ({TOTAL_REVIEWS} {t.reviewsCount})
            </Typography>
          </Box>
        </Box>

        {/* Reviews Carousel */}
        <Box
          ref={scrollContainerRef}
          sx={{
            display: "flex",
            gap: 3,
            overflowX: "auto",
            scrollBehavior: "smooth",
            pb: 2,
            px: 1,
            // Hide scrollbar
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Duplicate reviews for infinite seamless loop */}
          {[...REVIEWS, ...REVIEWS].map((review, index) => (
            <Paper
              key={`${review.author_name}-${index}`}
              elevation={0}
              sx={{
                minWidth: { xs: 300, md: 380 },
                maxWidth: { xs: 300, md: 380 },
                p: 3,
                borderRadius: 3,
                backgroundColor: isDark ? DARK_RGBA.card50 : LIGHT_RGBA.card90,
                border: `1px solid ${isDark ? DARK_RGBA.gold15 : LIGHT_RGBA.gold15}`,
                flexShrink: 0,
              }}
            >
              {/* Quote Icon */}
              <FormatQuoteIcon
                sx={{
                  color: "secondary.main",
                  opacity: 0.3,
                  fontSize: 40,
                  transform: "rotate(180deg)",
                  mb: -2,
                  ml: -1,
                }}
              />

              {/* Review Text */}
              <Typography
                variant="body2"
                sx={{
                  color: "text.primary",
                  lineHeight: 1.7,
                  mb: 3,
                  minHeight: 80,
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {review.text}
              </Typography>

              {/* Author Info */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  pt: 2,
                  borderTop: `1px solid ${isDark ? DARK_RGBA.gold10 : LIGHT_RGBA.gold10}`,
                }}
              >
                <Avatar
                  src={review.profile_photo_url}
                  alt={review.author_name}
                  sx={{
                    width: 44,
                    height: 44,
                    bgcolor: "secondary.main",
                    fontFamily: FONTS.cormorant,
                    fontWeight: 600,
                    fontSize: "1rem",
                  }}
                >
                  {getInitials(review.author_name)}
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "text.primary",
                      fontWeight: 600,
                      fontFamily: FONTS.cormorant,
                      fontSize: "1rem",
                    }}
                  >
                    {review.author_name}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Rating
                      value={review.rating}
                      readOnly
                      size="small"
                      icon={
                        <StarIcon
                          fontSize="inherit"
                          sx={{ color: "#FBBC05" }}
                        />
                      }
                      emptyIcon={
                        <StarIcon
                          fontSize="inherit"
                          sx={{
                            color: isDark
                              ? "rgba(255,255,255,0.2)"
                              : "rgba(0,0,0,0.15)",
                          }}
                        />
                      }
                      sx={{ fontSize: "0.9rem" }}
                    />
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary", fontSize: "0.7rem" }}
                    >
                      {review.relative_time_description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>

        {/* View All on Google Link */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Link
            href={GOOGLE_MAPS_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              color: "secondary.main",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "0.9rem",
              transition: "all 0.2s ease",
              "&:hover": {
                color: "secondary.light",
                transform: "translateY(-2px)",
              },
            }}
          >
            <GoogleIcon />
            {t.viewAllReviews}
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default ReviewsSection;
