// src/components/assets/Starship.js
import React from "react";
import styled from "styled-components";


export default function Starship(props) {
  const {id, name, model, cost_in_credits, length, max_atmosphering_speed
    ,crew, passengers, cargo_capacity, consumables, hyperdrive_rating, MGLT, starship_class} = props;
  let url = `https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/starships/${id}.jpg`;
  if(id < 4 || id === 17 || id === 32 || id === 49 || id === 52 || (id >= 58 && id <= 61) || (id >= 63 && id <= 66) ||
    id === 68 || (id >= 74 && id <= 75)) {
    url = require(`../../img/starships/${id}.jpg`);
  } else {
    url = `https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/starships/${id}.jpg`;
  }

  return (
    <>
      <Container>
        <h3>
          <strong>{name}</strong>
        </h3>
        <br/>
        <img title={name} style={{borderRadius: '15%', width: '250px', height: '250px'}} src={url} alt={name}/>
        <li>Model: {model}</li>
        <li>Cost, credits: {cost_in_credits}</li>
        <li>Length, m: {length}</li>
        <li>Max atmosphering speed: {max_atmosphering_speed}</li>
        <li>Crew: {crew}</li>
        <li>Passengers: {passengers}</li>
        <li>Cargo capacity: {cargo_capacity}</li>
        <li>Consumables: {consumables}</li>
        <li>Hyperdrive rating: {hyperdrive_rating}</li>
        <li>MGLT: {MGLT}</li>
        <li>Starship class: {starship_class}</li>
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