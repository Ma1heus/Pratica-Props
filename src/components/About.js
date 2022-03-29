import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 35vw;
  height: 10vw;
  font-size: 1.8vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: blue;
  color: #fff;

  border-left: 1px solid #fff;
  border-top: 1px solid #fff;
`;

const About = ({ nome, idade, sobre }) => {
  return (
    <Container>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p>Tema de estudo ou interesse: {sobre}</p>
    </Container>
  );
};

export default About;
