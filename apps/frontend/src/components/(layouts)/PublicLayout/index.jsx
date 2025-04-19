import React from "react";
import { Centralização, Layout } from "./styles";
import NavBar from "../../Navbar";
// import Footer from "../Footer";

const PublicLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Centralização>
        <Layout>
          <main>{children}</main>
        </Layout>
      </Centralização>
      {/* <Footer /> */}
    </>
  );
};

export default PublicLayout;
