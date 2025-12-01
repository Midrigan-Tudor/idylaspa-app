import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, IconButton } from "@mui/material";

const Footer = () => {
  const handleInstagramClick = () => {
    // You can replace this with your actual Instagram URL
    window.open("https://instagram.com", "_blank");
  };

  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        py: 2,
        px: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? theme.palette.grey[900]
            : theme.palette.grey[100],
        borderTop: 1,
        borderColor: "divider",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <IconButton
        color="primary"
        onClick={handleInstagramClick}
        aria-label="Instagram"
      >
        <InstagramIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;
