import React from "react";
import { styled } from "../../../stitches.config";

const STitle = styled("h1", {
  fontWeight: "700",
  fontSize: "40px",
  color: "#171717",
});

export const Title = ({ children }) => {
  return <STitle>{children}</STitle>;
};
