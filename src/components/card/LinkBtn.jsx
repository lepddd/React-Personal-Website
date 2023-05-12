import React from "react";
import { styled } from "../../../stitches.config";

const Link = styled("a", {
  padding: "10px 30px",
  textDecoration: "none",
  fontWeight: "400",
  fontSize: "1rem",
  textAlign: "center",
  cursor: "pointer",
  borderRadius: "100px",

  variants: {
    color: {
      default: {
        color: "#171717",
        backgroundColor: "#f4f4f4",
        fontWeight :'700',
        border: '1px solid #171717',
      },
      primary: {
        backgroundColor: "#171717",
        color: "#f4f4f4",
        transition: "0.2s ease-in-out",
        "&:hover": {
          boxShadow:
            "0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

export const LinkBtn = ({ children, link, color }) => {
  return (
    <Link href={link} color={color}>
      {children}
    </Link>
  );
};
