import { Container, Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Box
        sx={{
          bgcolor: "rgba(198, 148, 82, 0.85)",
          height: "226px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: "183px", // відступи зліва і справа
        }}
      >
        {/* Логотип + Facebook */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <img src="logo.png" alt="Logo" style={{ height: "40px" }} />
          <img src="facebook.png" alt="Facebook" style={{ height: "40px" }} />
        </Box>

        {/* Адреса + контакти */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            textAlign: "right",
          }}
        >
          <Typography variant="body1">
            30121 Lorain Rb. Norb Olmster, OH 44070
          </Typography>
          <Typography variant="body1">
            440-778-5671 or{" "}
            <a
              href="mailto:mskapes@gmail.com"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              mskapes@gmail.com
            </a>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
