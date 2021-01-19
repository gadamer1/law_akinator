import React, { FunctionComponent } from "react";
import Header from "./Header";
import { Main } from "next/document";
import Footer from "./Footer";

const AppLayout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default AppLayout;
