import { Grid, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppSelector } from "setup/store/react-hooks";

interface props {
  GridDirection?: any;
  LinksDirection?: any;
  GridWrap?: any;
  LinksWrap?: any;
}
const NavbarLinkSection = styled(Grid)(({ theme }) => ({
  display: "flex",
  height: "100%",
  [theme.breakpoints.up("md")]: {
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
  },
  [theme.breakpoints.up("xs")]: {
    justifyContent: "start",
    alignItems: "flex-end",
    width: "100%",
  },
}));
const LinkBox = styled(Link)(({ theme }) => ({
  color: theme.palette.dark.main,
  textDecoration: "none",
  display: "flex",
  justifyContent: "center",
  "& .css-we5jzv-MuiTypography-root": {
    color: theme.palette.dark.main,
  },
  "& p": {
    transition: "0.8s ease-in-out",
  },
  "&:hover p": {
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down("md")]: {
    position: "relative",
    margin: "20px 0",
    justifyContent: "flex-end",
    width: "100%",
    "&::after": {
      content: `''`,
      position: "absolute",
      width: "100%",
      right: "0",
      bottom: "-20px",
      height: "1px",
      backgroundColor: " rgba(0, 0, 0, 0.1)",
    },
    "&::before": {
      content: `''`,
      position: "absolute",
      width: "0",
      right: "0",
      bottom: "-20px",
      height: "2px",
      backgroundColor: theme.palette.primary.light,
      transition: "ease 0.8s",
    },
    "&:hover::before": {
      width: "50%",
    },
  },
}));
export const NavbarLink = ({
  GridDirection,
  LinksDirection,
  GridWrap,
  LinksWrap,
}: props) => {
  const LinksItems = useAppSelector((state) => state.home.NavbarLinks);

  return (
    <NavbarLinkSection
      container
      xs={12}
      spacing={0}
      direction={LinksDirection}
      flexWrap={LinksWrap}
    >
      {LinksItems.map((item, key) => (
        <Grid key={item.id} item md={3} width={{ xs: "100%", md: "auto" }}>
          <LinkBox to={item.path}>
            <Typography>{item.name}</Typography>
          </LinkBox>
        </Grid>
      ))}
    </NavbarLinkSection>
  );
};
