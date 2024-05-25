import { Fragment, useState } from "react";
import { IconButton } from "@mui/material";
import { MenuBar } from "./menuBar/menuBar";
import { Menu } from "@mui/icons-material";

export const NavbarMenuBar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <IconButton
        color="default"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
        sx={{
          ...(open && { display: "flex" }),
          right: "12px",
          position: "absolute",
          top: "23px",
          MinHeight: "65px",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "revert",
        }}
      >
        <Menu width="30px" height="25px" />
      </IconButton>
      <MenuBar open={open} handleDrawerClose={handleDrawerClose} />
    </Fragment>
  );
};
