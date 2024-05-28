import { Box, Grid, Typography, styled } from "@mui/material";
import { FooterFootnote } from "./footer_footnote/footer_footnote";
import { Link } from "react-router-dom";
import { FooterContentLinks } from "./footer_content_link/footer_content_links";
import { FooterContentConnections } from "./footer_content_connections/footer_content_connections";
import { FooterContentScrollButton } from "./footer_content_scroll_button/footer_content_scroll_button";

const FooterBox = styled(Box)(({ theme }) => ({
  marginTop: "30px",
  width: "100%",
  backgroundColor: theme.palette.neutral.main,
  minHeight: "500px",
  borderRadius: "33px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderTop: `1px solid ${theme.palette.primary.light}`,
  "& a": {
    textDecoration: "none",
  },
}));

const FooterContentBox = styled(Box)(({ theme }) => ({
  width: "100%",
  Height: "auto",
}));
const LogoBoxLink = styled(Link)(({ theme }) => ({
  fontSize: "1.5rem",
  lineHeight: "140%",
  fontWeight: "800",
  whiteSpace: "nowrap",
  color: theme.palette.dark.main,
  marginBottom: "16px",
}));

export const Footer = () => {
  return (
    <>
      <FooterBox padding={{ xs: "0 12px", md: "0 40px" }}>
        <FooterContentBox>
          <FooterContentScrollButton />

          <Box mt={4}>
            <LogoBoxLink to="/" style={{ display: "flex" }}>
              <img src={process.env.PUBLIC_URL + "/images/navlogo.png"} />
            </LogoBoxLink>
            <div style={{ display: "flex" }}>
              <Typography variant="body2" component="p" mr={4}>
                Contact support: 021-3456000
              </Typography>
              <Typography variant="body2" component="p" mr={4}>
                Response 24 hours a day, 7 days a week
              </Typography>
            </div>
          </Box>

          <Grid
            container
            justifyContent="space-between"
            alignItems="baseline"
            mt={4}
          >
            <FooterContentLinks />
            <FooterContentConnections />
          </Grid>
        </FooterContentBox>
      </FooterBox>
      <FooterFootnote />
    </>
  );
};
