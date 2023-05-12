import React, { useState } from "react";
import { styled } from "../../stitches.config";
import projects from "../../data";
import { BigCard } from "../components/card";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Title } from "../components/title";

const Container = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "40px",
});

const TitleSection = styled("div", {
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
});

const ArrowBtn = styled(motion.button, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
  background: "#171717",
  borderRadius: "88px",
  cursor: "pointer",
  border: "none",
});

const IndexBox = styled("div", {
  display: "flex",
  gap: "12px",
  overflow: "hidden",
});

const Index = styled(motion.span, {
  borderRadius: "100px",
  cursor: "pointer",
  transition: "width 0.2s cubic-bezier(.57,.21,.69,1.25)",

  variants: {
    active: {
      true: {
        width: "5px",
        height: "5px",
        backgroundColor: "#171717",
      },
      false: {
        width: "20px",
        height: "5px",
        backgroundColor: "#737373",
      },
    },
  },
});


export const Projects = () => {
  const [[selected, direction], setSelected] = useState([0, 0]);

  const paginate = (newDirection) => {
    if (selected === 0 && newDirection < 0)
      return setSelected([projects.length - 1, newDirection]);
    if (selected === projects.length - 1 && newDirection > 0)
      return setSelected([0, newDirection]);

    return setSelected([selected + newDirection, newDirection]);
  };

  const handleClick = (index) => {
    if (selected > index) return setSelected([index, -1]);
    if (selected < index) return setSelected([index, 1]);
  };

  return (
    <Container>
      <TitleSection>
        <ArrowBtn onClick={() => paginate(-1)} whileTap={{ scale: 0.85 }}>
          <Icon
            icon="ic:round-keyboard-arrow-left"
            color="#f4f4f4"
            width="20"
            height="20"
          />
        </ArrowBtn>
        <Title>Projects.</Title>
        <ArrowBtn onClick={() => paginate(1)} whileTap={{ scale: 0.85 }}>
          <Icon
            icon="ic:round-keyboard-arrow-right"
            color="#f4f4f4"
            width="20"
            height="20"
          />
        </ArrowBtn>
      </TitleSection>

      <BigCard project={projects[selected]} direction={direction} />
      <IndexBox>
        {projects.map((project, index) => (
          <Index
            key={project.id}
            active={selected === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </IndexBox>
    </Container>
  );
};
