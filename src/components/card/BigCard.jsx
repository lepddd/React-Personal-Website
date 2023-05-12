import React from "react";
import { styled } from "../../../stitches.config";
import { LinkBtn } from "./LinkBtn";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import pattern from "/pattern.png";

const variants = {
  enterScale: (direction) => {
    return {
      scale: direction > 0 ? 1.2 : 0.8,
      opacity: 0,
    };
  },
  exitScale: (direction) => {
    return {
      scale: direction < 0 ? 1.2 : 0.8,
      opacity: 0,
    };
  },
  centerScale: {
    scale: 1,
    opacity: 1,
  },
  enterSlide: (direction) => {
    return {
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    };
  },
  centerSlide: {
    x: 0,
    opacity: 1,
  },
  exitSlide: (direction) => {
    return {
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    };
  },
};

const StyledCard = styled(motion.div, {
  position: "relative",
  width: "260px",
  background: "#F4F4F4",
  boxShadow:
    "0px 4px 16px rgba(17, 17, 26, 0.1), 0px 8px 32px rgba(17, 17, 26, 0.05)",
  borderRadius: "12px",
  padding: "132px 20px 22px 20px",

  "@bp2": {
    width: "600px",
    height: "230px",
    padding: "45px 30px 45px 140px",
    marginTop: "0",
  },
});

const IconBox = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  width: "140px",
  height: "140px",
  background: "linear-gradient(135deg, #0CAEE9 0%, #12CFF3 100%)",
  boxShadow:
    "4px 0px 10px rgba(18, 207, 243, 0.5), 0px 4px 10px rgba(18, 207, 243, 0.5)",
  borderRadius: "12px",
  top: "-30px",
  left: "50%",
  transform: "translateX(-50%)",

  "@bp2": {
    top: "50%",
    left: "-30px",
    transform: "translateY(-50%)",
  },
});

const Pattern = styled("img", {
  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const TitleBox = styled("div", {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  gap: "24px",
  marginBottom: "18px",

  "& p": {
    color: "#171717",
    fontWeight: "700",
    fontSize: "32px",
  },

  "& p:last-child": {
    color: "#404040",
    fontFamily: "Ubuntu Condensed",
    fontWeight: "400",
    fontSize: "20px",
  },

  "@bp2": {
    textAlign: "start",
  },
});

const LinkBox = styled("div", {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  gap: "20px",

  "@bp2": {
    flexDirection: "row",
  },
});

export const BigCard = ({ project, direction }) => {
  const { title, description, icon, linkVercel, linkGithub } = project;

  return (
    <AnimatePresence mode="popLayout" initial={false} custom={direction}>
      <StyledCard
        variants={variants}
        custom={direction}
        initial="exitSlide"
        animate="centerSlide"
        exit="enterSlide"
        key={project.id}
      >
        <IconBox>
          <Pattern src={pattern} alt="pattern" />
          <Icon icon={icon} color="#f4f4f4" width="62" height="62" />
        </IconBox>
        <TitleBox>
          <p>{title}</p>
          <p>{description}</p>
        </TitleBox>
        <LinkBox>
          <LinkBtn color="default" link={linkGithub}>
            Ver no Github
          </LinkBtn>
          <LinkBtn color="primary" link={linkVercel}>
            Ver no Vercel
          </LinkBtn>
        </LinkBox>
      </StyledCard>
    </AnimatePresence>
  );
};
