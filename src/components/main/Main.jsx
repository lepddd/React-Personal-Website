import React from "react";
import { styled } from "../../../stitches.config";

const Container = styled("main", {
  display: "flex",
  flexDirection: "column",
  gap:'22px',
  flex: "1",
  justifyContent: "center",
  alignItems: "center",
  padding:'60px',
  
});
export const Main = ({ children }) => {
  return <Container>{children}</Container>;
};
