import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import TeamSection from "./TeamSection";
import ServicesSection from "./ServicesSection";

const HomePage = () => {
  return (
    <Box
      sx={{
        // Add bottom padding to account for fixed footer
        pb: { xs: 20, md: 16 },
      }}
    >
      <HeroSection />
      <TeamSection />
      <ServicesSection />
    </Box>
  );
};

export default HomePage;
