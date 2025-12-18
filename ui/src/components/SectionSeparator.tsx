import { Box } from "@mui/material";

const SectionSeparator = () => {
  return (
    <Box
      sx={{
        height: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 4, md: 8 },
      }}
    >
      {/* Left line */}
      <Box
        sx={{
          flex: 1,
          maxWidth: { xs: 120, md: 300 },
          height: 1,
          background: "linear-gradient(90deg, transparent 0%, #C9A050 100%)",
          opacity: 0.5,
        }}
      />

      {/* Center diamond */}
      <Box
        sx={{
          width: 6,
          height: 6,
          bgcolor: "#C9A050",
          opacity: 0.6,
          transform: "rotate(45deg)",
          mx: 2,
        }}
      />

      {/* Right line */}
      <Box
        sx={{
          flex: 1,
          maxWidth: { xs: 120, md: 300 },
          height: 1,
          background: "linear-gradient(90deg, #C9A050 0%, transparent 100%)",
          opacity: 0.5,
        }}
      />
    </Box>
  );
};

export default SectionSeparator;
