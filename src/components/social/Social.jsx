import React from "react";
import { Icon } from "@iconify/react";
import { styled } from "../../../stitches.config";

const Container = styled("div", {
  zIndex: "99",
  display: "flex",
  gap: "22px",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "24px",
  transform: "translate(-50%, -50%)",
  padding: "12px",
  backgroundColor: "#f0f0f0",
  boxShadow:
    "0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
});

export const Social = () => {
  return (
    <Container>
      <Icon icon="bi:linkedin" color="#171717" width="24" height="24" />
      <Icon icon="bi:github" color="#171717" width="24" height="24" />
    </Container>
  );
};
