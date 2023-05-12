import { styled } from "../../stitches.config";
import { Link } from "react-router-dom";
import { Title } from "../components/title";


const Container = styled("div", {
  display: "flex",
  flexDirection:'column',
  alignItems: "center",
  justifyContent: "center",
  gap: "22px",
});

const Subtitle = styled("p", {
  fontFamily: "Ubuntu Condensed",
  fontWeight: "400",
  fontSize: "20px",
  color: "#404040",
  textAlign:'center',
});

const LinkBtn = styled(Link, {
  padding: "10px 30px",
  textDecoration: "none",
  fontWeight: "400",
  fontSize: "1rem",
  textAlign: "center",
  cursor: "pointer",
  borderRadius: "100px",
  backgroundColor: "#171717",
  color: "#f4f4f4",
  transition: "0.2s ease-in-out",
  "&:hover": {
    boxShadow:
      "0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
  },
});
export const Home = () => {
  return (
    <Container>
      <Title>Olá, eu sou o Luiz.</Title>
      <Subtitle>
        Um desenvolvedor Web focado em Frontend, construindo o Frontend de sites
        e aplicativos da Web que leva ao sucesso do produto geral.
      </Subtitle>
      <LinkBtn to='/projetos'>Ver projetos</LinkBtn>
    </Container>
  );
};
