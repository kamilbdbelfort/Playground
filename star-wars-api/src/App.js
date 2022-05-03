// src/App.js
import React from "react";
import styled from "styled-components";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import SwapiList from "./screens/SwapiList";
import Homepage from "./components/Homepage";
import People from "./components/categories/People";
import Planets from "./components/categories/Planets";
import Films from "./components/categories/Films";
import Species from "./components/categories/Species";
import Vehicles from "./components/categories/Vehicles";
import Starships from "./components/categories/Starships";

import background from "./img/universe.jpg"

export default function App() {

  return (
    <Router>
      <Container>
        <SwapiList/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/people" element={<People/>}/>
          <Route path="/planets" element={<Planets/>}/>
          <Route path="/films" element={<Films/>}/>
          <Route path="/species" element={<Species/>}/>
          <Route path="/vehicles" element={<Vehicles/>}/>
          <Route path="/starships" element={<Starships/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  background-image: url(${background});
  color: rgb(224,191,0);
  font-weight: bold;
  display: flex;
  align-items: stretch;
`;