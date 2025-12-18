import { Box } from "@mui/material";

import HeroSection from "./HeroSection";
import ReviewsSection from "./ReviewsSection";
import SectionSeparator from "./SectionSeparator";
import ServicesSection from "./ServicesSection";
import TeamSection from "./TeamSection";

const HomePage = () => {
  return (
    <Box
      sx={{
        // Add bottom padding to account for fixed footer
        pb: { xs: 20, md: 16 },
      }}
    >
      <HeroSection />
      <SectionSeparator />
      <TeamSection />
      <SectionSeparator />
      <ServicesSection />
      <SectionSeparator />
      <ReviewsSection />
    </Box>
  );
};

export default HomePage;
