import React from "react";
import { styled } from "../../../stitches.config";
import { NavLink } from "react-router-dom";
import { Avatar } from "./Avatar";

const SHeader = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 50px",
  borderBottom: '1px solid #D4D4D4',
});

const List = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Link = styled(NavLink, {
  textDecoration: "none",
  cursor: "pointer",
  padding: "10px",
  marginLeft: "12px",
  color: "#737373",
  fontFamily: "Ubuntu Condensed",
  fontSize: "1.25rem",
  
  /* custom class */
  "&.active": {
    color: "#171717",
  },
});

export const Header = () => {
  return (
    <SHeader>
      <Avatar />
      <List>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/projetos">Projetos</Link>
      </List>
    </SHeader>
  );
};
