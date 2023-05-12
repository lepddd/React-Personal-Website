import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { styled } from "../../stitches.config";
import { Main } from "../components/main";
import { Social } from "../components/social";

const Root = styled("div", {
  minHeight: "100vh",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#f0f0f0",
  overflow: "hidden",
});

export const RootLayout = () => {
  return (
    <Root>
      <Header />
      <Social />
      <Main>
        <Outlet />
      </Main>
    </Root>
  );
};
