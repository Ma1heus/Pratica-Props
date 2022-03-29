import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import About from "./components/About";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  background-color: black;
`;

const Content = styled.div`
  height: 50vw;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

const Titulo = styled.h1`
  color: #fff;
  font-size: 8vw;

  margin-bottom: 4vw;
`;

export default class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Titulo>Pessoas</Titulo>
        <Content>
          <About nome={"Matheus"} idade={"19"} sobre={"Front-End"} />
          <About nome={"Mauricio"} idade={"15"} sobre={"Front-End"} />
          <About nome={"Michelle"} idade={"26"} sobre={"Back-End"} />
          <About nome={"Suelen"} idade={"22"} sobre={"Odontologia"} />
          <About nome={"Geisieli"} idade={"25"} sobre={"Química"} />
        </Content>
      </Container>
    );
  }
}
