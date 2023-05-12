import React, { useState } from "react";
import { styled } from "../../stitches.config";
import { Title } from "../components/title";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  enter: { scale: 1.2, opacity: 0 },
  exit: { scale: 0.9, opacity: 0 },
  center: { scale: 1, opacity: 1 },
};

const Container = styled("div", {
  backgroundColor: "#F0F0F0",
  width: "100%",
  maxWidth: "1024px",
  display: "flex",
  flexDirection: "column",
  padding: "22px",
  gap: "22px",
});

const TitleBox = styled("section", {
  display: "flex",
  gap: "22px",
  flexDirection: "column",
});

const Description = styled("p", {
  fontFamily: "Ubuntu Condensed",
  fontWeight: "400",
  fontSize: "20px",
  color: "#404040",
});

const SelectBox = styled("section", {
  filter:
    "drop-shadow(0px 4px 16px rgba(17, 17, 26, 0.1)) drop-shadow(0px 8px 32px rgba(17, 17, 26, 0.05))",
});

const OptionsBox = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});

const Option = styled("button", {
  border: "none",
  position: "relative",
  width: "100%",
  color: "#171717",
  fontWeight: "700",
  fontSize: "20px",
  textAlign: "center",
  padding: "12px 0px",
  cursor: "pointer",

  "&:before": {
    position: "absolute",
    content: "",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "5px",
    background: "#D9D9D9",
  },

  variants: {
    active: {
      true: {
        "&:before": {
          background: "linear-gradient(90deg, #12CFF3 0%, #0CAEE9 100%)",
        },
      },
    },
  },
});

const Box = styled(motion.div, {
  padding: "20px",
  background: "#F4F4F4",
  borderRadius: "0px 0px 12px 12px",

  "& p": {
    color: "#404040",
    fontWeight: "400",
    fontSize: "16px",
  },
});

const SkillsBox = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap",
  gap: "6px",
});

const Skill = styled("div", {
  background: "#F0F0F0",
  border: "1px solid #171717",
  borderRadius: "4px",
  padding: "6px 20px",
  color: "#404040",
  fontWeight: "400",
  fontSize: "16px",
  fontFamily: "Ubuntu Condensed",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",

  "&:hover": {
    background: "#171717",
    color: "#F0F0F0",
  },
});

export const About = () => {
  const [current, setCurrent] = useState(0);

  const options = ["Quem sou eu", "Habilidades"];
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "GIT",
    "React",
    "Tailwind",
    "Github",
    "Responsive Desing",
    "Svelte",
    "Stitches",
    "Styled Components",
  ];

  const handleClick = (index) => {
    setCurrent(index);
  };
  return (
    <Container>
      <TitleBox>
        <Title>Sobre.</Title>
        <Description>
          Aqui você encontrará mais informações sobre mim, o que faço e minhas
          habilidades atuais principalmente em termos de programação e
          tecnologia
        </Description>
      </TitleBox>

      <SelectBox>
        <OptionsBox>
          {options.map((option, index) => (
            <Option
              active={index === current}
              key={index}
              onClick={() => handleClick(index)}
            >
              {option}
            </Option>
          ))}
        </OptionsBox>
        <AnimatePresence mode="popLayout">
          {current === 0 ? (
            <Box
              variants={variants}
              initial="enter"
              exit="exit"
              animate="center"
              key={current}
            >
              <p>
                Sou um Desenvolvedor Web Frontend construindo o Front-end de
                Sites e Aplicações Web que leva ao sucesso do produto como um
                todo. Confira alguns dos meus trabalhos na seção <b>Projetos</b>
                .
              </p>
              <br></br>
              <p>
                Estou aberto a oportunidades de trabalho onde possa contribuir,
                aprender e crescer. Se você tiver uma boa oportunidade que
                corresponda às minhas habilidades e experiência, não hesite em
                entrar em contato comigo.
              </p>
            </Box>
          ) : (
            <Box
              variants={variants}
              initial="enter"
              exit="exit"
              animate="center"
              key={current}
            >
              <SkillsBox>
                {skills.map((skill) => (
                  <Skill key={skill}>{skill}</Skill>
                ))}
              </SkillsBox>
            </Box>
          )}
        </AnimatePresence>
      </SelectBox>
    </Container>
  );
};
