import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  useTheme as useMuiTheme,
} from "@mui/material";

import { COLORS, DARK_RGBA, LIGHT_RGBA } from "../utils/constants";
import { useLanguage } from "./LanguageProvider";

// Team member images
const teamMembers = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    experience: 13,
  },
];

const TeamSection = () => {
  const { t } = useLanguage();
  const theme = useMuiTheme();
  const isDark = theme.palette.mode === "dark";

  const getTeamMemberData = (id: number) => {
    if (id === 1) {
      return {
        name: t.team1Name,
        role: t.team1Role,
        bio: t.team1Bio,
        specialties: t.team1Specialties,
      };
    }
    return {
      name: "",
      role: "",
      bio: "",
      specialties: "",
    };
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: isDark
          ? `linear-gradient(145deg, ${DARK_RGBA.card50} 0%, rgba(20, 28, 22, 0.98) 40%, rgba(25, 35, 28, 0.95) 60%, ${DARK_RGBA.card50} 100%)`
          : `linear-gradient(145deg, ${LIGHT_RGBA.card50} 0%, rgba(252, 250, 245, 1) 40%, rgba(255, 253, 248, 1) 60%, ${LIGHT_RGBA.card50} 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating glowing orbs */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: { xs: 100, md: 200 },
          height: { xs: 100, md: 200 },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201, 160, 80, 0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "orbGlow1 12s ease-in-out infinite",
          pointerEvents: "none",
          "@keyframes orbGlow1": {
            "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: 0.8 },
            "50%": { transform: "translate(30px, -20px) scale(1.2)", opacity: 1 },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          right: "8%",
          width: { xs: 120, md: 220 },
          height: { xs: 120, md: 220 },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201, 160, 80, 0.1) 0%, transparent 70%)",
          filter: "blur(45px)",
          animation: "orbGlow2 15s ease-in-out infinite",
          pointerEvents: "none",
          "@keyframes orbGlow2": {
            "0%, 100%": { transform: "translate(0, 0)" },
            "50%": { transform: "translate(-35px, 15px)" },
          },
        }}
      />

      {/* Decorative lotus flowers - elegant outlined design */}
      {[
        { top: "8%", left: "12%", size: 60, delay: "0s", duration: 20 },
        { top: "15%", right: "10%", size: 50, delay: "3s", duration: 18 },
        { bottom: "12%", left: "8%", size: 55, delay: "5s", duration: 22 },
        { bottom: "20%", right: "15%", size: 45, delay: "2s", duration: 16 },
        { top: "45%", left: "3%", size: 40, delay: "4s", duration: 19 },
        { top: "50%", right: "5%", size: 48, delay: "1s", duration: 17 },
      ].map((lotus, index) => (
        <Box
          key={`lotus-${index}`}
          component="svg"
          viewBox="0 0 100 100"
          sx={{
            position: "absolute",
            top: lotus.top,
            bottom: lotus.bottom,
            left: lotus.left,
            right: lotus.right,
            width: { xs: lotus.size * 0.5, md: lotus.size },
            height: { xs: lotus.size * 0.5, md: lotus.size },
            opacity: 0.15,
            zIndex: 0,
            pointerEvents: "none",
            animation: `lotusFloat${index} ${lotus.duration}s ease-in-out infinite`,
            animationDelay: lotus.delay,
            [`@keyframes lotusFloat${index}`]: {
              "0%, 100%": { transform: "rotate(0deg) scale(1)" },
              "25%": { transform: "rotate(5deg) scale(1.05)" },
              "50%": { transform: "rotate(-3deg) scale(0.98)" },
              "75%": { transform: "rotate(4deg) scale(1.02)" },
            },
          }}
        >
          {/* 8-petal lotus flower */}
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
          <circle cx="50" cy="50" r="8" fill="#C9A050" opacity="0.5" />
        </Box>
      ))}

      {/* Sparkle particles */}
      {[
        { top: "20%", left: "25%", delay: "0s" },
        { top: "30%", right: "20%", delay: "1s" },
        { top: "60%", left: "15%", delay: "2s" },
        { top: "70%", right: "25%", delay: "0.5s" },
        { top: "40%", left: "35%", delay: "1.5s" },
        { top: "80%", right: "35%", delay: "2.5s" },
        { top: "25%", left: "45%", delay: "3s" },
        { top: "55%", right: "40%", delay: "0.8s" },
      ].map((sparkle, index) => (
        <Box
          key={`sparkle-${index}`}
          sx={{
            position: "absolute",
            top: sparkle.top,
            left: sparkle.left,
            right: sparkle.right,
            width: 4,
            height: 4,
            borderRadius: "50%",
            bgcolor: "#C9A050",
            opacity: 0.4,
            boxShadow: "0 0 8px 2px rgba(201, 160, 80, 0.4)",
            animation: "sparkleGlow 3s ease-in-out infinite",
            animationDelay: sparkle.delay,
            pointerEvents: "none",
            "@keyframes sparkleGlow": {
              "0%, 100%": { opacity: 0.2, transform: "scale(0.8)" },
              "50%": { opacity: 0.6, transform: "scale(1.4)" },
            },
          }}
        />
      ))}

      {/* Floating golden particles rising */}
      {[...Array(8)].map((_, index) => (
        <Box
          key={`particle-${index}`}
          sx={{
            position: "absolute",
            left: `${10 + index * 12}%`,
            bottom: "-5%",
            width: 3,
            height: 3,
            borderRadius: "50%",
            bgcolor: "#C9A050",
            opacity: 0,
            pointerEvents: "none",
            animation: `particleRise 12s ease-in-out infinite`,
            animationDelay: `${index * 1.5}s`,
            "@keyframes particleRise": {
              "0%": { transform: "translateY(0) scale(0)", opacity: 0 },
              "10%": { opacity: 0.5, transform: "translateY(-10vh) scale(1)" },
              "50%": { opacity: 0.3 },
              "100%": { transform: "translateY(-100vh) scale(0.5)", opacity: 0 },
            },
          }}
        />
      ))}

      {/* Decorative corner accents */}
      <Box
        component="svg"
        viewBox="0 0 100 100"
        sx={{
          position: "absolute",
          top: 20,
          left: 20,
          width: { xs: 40, md: 70 },
          height: { xs: 40, md: 70 },
          opacity: 0.12,
          pointerEvents: "none",
        }}
      >
        <path
          d="M10 50 Q10 10 50 10"
          fill="none"
          stroke="#C9A050"
          strokeWidth="2"
        />
        <path
          d="M20 50 Q20 20 50 20"
          fill="none"
          stroke="#C9A050"
          strokeWidth="1.5"
        />
        <circle cx="50" cy="10" r="3" fill="#C9A050" />
        <circle cx="10" cy="50" r="3" fill="#C9A050" />
      </Box>
      <Box
        component="svg"
        viewBox="0 0 100 100"
        sx={{
          position: "absolute",
          bottom: 20,
          right: 20,
          width: { xs: 40, md: 70 },
          height: { xs: 40, md: 70 },
          opacity: 0.12,
          pointerEvents: "none",
          transform: "rotate(180deg)",
        }}
      >
        <path
          d="M10 50 Q10 10 50 10"
          fill="none"
          stroke="#C9A050"
          strokeWidth="2"
        />
        <path
          d="M20 50 Q20 20 50 20"
          fill="none"
          stroke="#C9A050"
          strokeWidth="1.5"
        />
        <circle cx="50" cy="10" r="3" fill="#C9A050" />
        <circle cx="10" cy="50" r="3" fill="#C9A050" />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="overline"
            sx={{
              color: "secondary.main",
              letterSpacing: "0.3em",
              fontSize: "0.75rem",
              fontWeight: 600,
            }}
          >
            {t.specialties}
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              fontWeight: 500,
              color: "text.primary",
              mt: 1,
              mb: 2,
            }}
          >
            {t.teamTitle}
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
            {t.teamSubtitle}
          </Typography>

          {/* Decorative Divider */}
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
                width: 60,
                height: 1,
                background: `linear-gradient(90deg, transparent, ${isDark ? DARK_RGBA.gold50 : LIGHT_RGBA.gold50})`,
              }}
            />
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "secondary.main",
              }}
            />
            <Box
              sx={{
                width: 60,
                height: 1,
                background: `linear-gradient(90deg, ${isDark ? DARK_RGBA.gold50 : LIGHT_RGBA.gold50}, transparent)`,
              }}
            />
          </Box>
        </Box>

        {/* Team Grid */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {teamMembers.map((member) => {
            const data = getTeamMemberData(member.id);
            return (
              <Card
                key={member.id}
                sx={{
                  maxWidth: { xs: "100%", sm: 500, md: 480, lg: 520 },
                  width: "100%",
                  backgroundColor: isDark
                    ? DARK_RGBA.card80
                    : LIGHT_RGBA.card90,
                  border: `1px solid ${isDark ? DARK_RGBA.gold10 : LIGHT_RGBA.gold10}`,
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: isDark
                      ? `0 20px 40px ${DARK_RGBA.shadow40}`
                      : `0 20px 40px ${LIGHT_RGBA.shadow10}`,
                    "& .member-image": {
                      transform: "scale(1.05)",
                    },
                  },
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    position: "relative",
                    paddingTop: "100%",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    className="member-image"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${member.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transition: "transform 0.5s ease",
                    }}
                  />
                  {/* Experience Badge */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 16,
                      right: 16,
                      backgroundColor: "secondary.main",
                      color: COLORS.darkText,
                      px: 2,
                      py: 0.5,
                      borderRadius: 1,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 600,
                        fontSize: "0.75rem",
                      }}
                    >
                      {member.experience} {t.yearsExperience}
                    </Typography>
                  </Box>
                </Box>

                <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 3.5 } }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      color: "text.primary",
                      mb: 0.5,
                      fontSize: { xs: "1.25rem", sm: "1.5rem" },
                    }}
                  >
                    {data.name}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "secondary.main",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      fontSize: { xs: "0.7rem", sm: "0.75rem" },
                      mb: 2,
                    }}
                  >
                    {data.role}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      mb: 2,
                      lineHeight: 1.7,
                      fontSize: { xs: "0.9rem", sm: "0.95rem" },
                    }}
                  >
                    {data.bio}
                  </Typography>

                  <Box
                    sx={{
                      pt: 2,
                      borderTop: `1px solid ${isDark ? DARK_RGBA.gold10 : LIGHT_RGBA.gold10}`,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: "text.secondary",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        fontSize: "0.65rem",
                      }}
                    >
                      {t.specialties}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.primary",
                        fontStyle: "italic",
                        mt: 0.5,
                        fontSize: "0.9rem",
                      }}
                    >
                      {data.specialties}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default TeamSection;
