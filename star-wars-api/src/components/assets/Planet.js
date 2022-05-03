// src/components/assets/Planet.js
import React from "react";
import styled from "styled-components";


export default function Planet(props) {
  const {id, name, rotation_period, orbital_period, climate, diameter, gravity, population, terrain} = props;
  let url = "";

  if(id === 1 || (id >= 22 && id <= 25) || id === 27 || id === 29 || id === 31 || (id >= 34 && id <= 37) || id === 44
    || (id >= 52 && id <= 53) || id === 60){
      url = require(`../../img/planets/${id}.jpg`);
  } else {
      url = `https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/${id}.jpg`;
  }

  return (
    <>
      <Container>
        <h3>
          <strong>{name}</strong>
        </h3>
        <br/>
        <img title={name} style={{borderRadius: '50%', width: '250px', height: '250px'}} src={url} alt={name}/>
        <li>Rotation, hours: {rotation_period}</li>
        <li>Year, days: {orbital_period}</li>
        <li>Climate: {climate}</li>
        <li>Diameter, km: {diameter}</li>
        <li>Gravity, G: {gravity}</li>
        <li>Population: {population}</li>
        <li>Terrain: {terrain}</li>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: auto;
  height: auto;
  align-items: stretch;
  margin: 0px 5px 10px 5px;
  padding: 10px;
  border-style:solid; 
  border-color: rgb(224,191,0); 
  borderWidth: medium;
  background-color: rgb(32,32,32);
`;