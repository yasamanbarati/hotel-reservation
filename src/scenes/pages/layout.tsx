import React, { Fragment } from "react";
import { Navbar } from "../../components/navbar";
import { Footer } from "components/footer/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
