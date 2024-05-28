import { AppBar, Toolbar, Grid, styled } from "@mui/material";
import { NavbarLink } from "./navbar_link/navbar_link";
import { NavbarLogo } from "./navbar_logo/navbar_logo";
import { NavbarMenuBar } from "./navbar_menuBar/navbar_menuBar";
import { Person } from "@mui/icons-material";
import { ContentButton } from "components/button/content_button/content_button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: "0px 4px 83px rgba(0, 0, 0, 0.11)",
  zIndex: "2",
  [theme.breakpoints.up("xs")]: {
    height: "65px",
    padding: "0 12px",
    zIndex: "10",
  },
  [theme.breakpoints.up("md")]: {
    height: "80px",
    padding: "0 40px",
  },
  "& .MuiToolbar-root": {
    height: "100%",
    paddingLeft: "0!important",
    paddingRight: "0!important",
  },
}));
const NavbarMainSection = styled(Grid)(({ theme }) => ({
  height: "100%",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    alignItems: "center",
    flexDirection: "row-reverse",
    padding: "0",
  },
  [theme.breakpoints.up("md")]: {
    alignItems: "center",
    padding: "0",
  },
}));
const LoginButtonBox = styled(Grid)(({ theme }) => ({
  flexGrow: 1,
  marginBottom: "0",
  display: "flex",
  alignItems: "center",
  padding: "0",
  "& a": {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    "& button": {
      boxShadow: "0px 20px 33px ",
      borderRadius: "13px",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      width: "75%",
      height: "100%",
      fontSize:'1rem',
      fontWeight: "600",
      whiteSpace: "nowrap",
      transition: "0.8s ease-in-out",
      [theme.breakpoints.up("xs")]: {
        display: "none",
      },
      [theme.breakpoints.up("md")]: {
        display:"flex",
      },
    },
    "& svg":{
      [theme.breakpoints.up("xs")]: {
        display: "flex",
      },
      [theme.breakpoints.up("md")]: {
        display:"none",
      },
      justifyContent: "center",
      alignItems: "center",
      transition: "0.8s ease-in-out",
      width: "30px!important",
      height: "30px!important",
      padding: "0",
    }
  },
  
  [theme.breakpoints.up("xs")]: {
    height: "55px",
    "& a": {
      justifyContent: "flex-start",
    }
  },
  [theme.breakpoints.up("md")]: {
    height: "100%",
  },
}));

export const Navbar = () => {

  const [isLogin, setIsLogin] = useState<boolean>(false);
  useEffect(() => {
    setIsLogin(isLogin)
  }, [isLogin])
  
  const handleClick = () => {
    setIsLogin(true)
  };

  return (
    <CustomAppBar color="inherit">
      <Toolbar>
        <NavbarMainSection container spacing={1}>
          <Grid
            item
            xs={1}
            p={0}
            sx={{
              flexGrow: 1,
              display: { md: "none", xs: "flex" },
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          >
            <NavbarMenuBar />
          </Grid>

          <NavbarLogo />

          <Grid
            item
            md={8}
            p={0}
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <NavbarLink />
          </Grid>
          <LoginButtonBox item md={2} xs={1}>
            <Link to={"/login"}>
              <ContentButton
                text={isLogin === true ? "yasaman":"Login"}
                variant={isLogin === true ? "outlined":"contained"}
                size="small"
                onClick={handleClick}
              />
              <Person />
            </Link>
          </LoginButtonBox>
        </NavbarMainSection>
      </Toolbar>
    </CustomAppBar>
  );
};
