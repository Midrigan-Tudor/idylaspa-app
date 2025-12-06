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

// Placeholder team images
const teamMembers = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    experience: 8,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    experience: 6,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80",
    experience: 5,
  },
];

const TeamSection = () => {
  const { t } = useLanguage();
  const theme = useMuiTheme();
  const isDark = theme.palette.mode === "dark";

  const getTeamMemberData = (id: number) => {
    switch (id) {
      case 1:
        return {
          name: t.team1Name,
          role: t.team1Role,
          bio: t.team1Bio,
          specialties: t.team1Specialties,
        };
      case 2:
        return {
          name: t.team2Name,
          role: t.team2Role,
          bio: t.team2Bio,
          specialties: t.team2Specialties,
        };
      case 3:
        return {
          name: t.team3Name,
          role: t.team3Role,
          bio: t.team3Bio,
          specialties: t.team3Specialties,
        };
      default:
        return {
          name: "",
          role: "",
          bio: "",
          specialties: "",
        };
    }
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: isDark ? DARK_RGBA.card50 : LIGHT_RGBA.card50,
        position: "relative",
      }}
    >
      {/* Decorative Pattern */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='${isDark ? "%23C9A050" : "%232D5A47"}' fill-opacity='0.03'%3E%3Cpath fill-rule='evenodd' d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          pointerEvents: "none",
        }}
      />

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
                background: `linear-gradient(90deg, transparent, ${isDark ? DARK_RGBA.gold50 : LIGHT_RGBA.green50})`,
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
                background: `linear-gradient(90deg, ${isDark ? DARK_RGBA.gold50 : LIGHT_RGBA.green50}, transparent)`,
              }}
            />
          </Box>
        </Box>

        {/* Team Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 3, md: 4 },
          }}
        >
          {teamMembers.map((member) => {
            const data = getTeamMemberData(member.id);
            return (
              <Card
                key={member.id}
                sx={{
                  backgroundColor: isDark
                    ? DARK_RGBA.card80
                    : LIGHT_RGBA.card90,
                  border: `1px solid ${isDark ? DARK_RGBA.gold10 : LIGHT_RGBA.green10}`,
                  borderRadius: 2,
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

                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      color: "text.primary",
                      mb: 0.5,
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
                      fontSize: "0.75rem",
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
                      lineHeight: 1.6,
                    }}
                  >
                    {data.bio}
                  </Typography>

                  <Box
                    sx={{
                      pt: 2,
                      borderTop: `1px solid ${isDark ? DARK_RGBA.gold10 : LIGHT_RGBA.green10}`,
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
