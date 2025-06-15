import React from "react";
import { Footer, Header } from "../../utils/Route";

type LayoutProps = {
  children: React.ReactNode;
}

export const Layout= ({ children }:LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
