// src/components/assets/Vehicle.js
import React from "react";
import styled from "styled-components";


export default function Vehicle(props) {
  const {id, name, model, cost_in_credits, length, max_atmosphering_speed
    ,crew, passengers, cargo_capacity, consumables, vehicle_class} = props;
  let url = "";
  if(id <= 42) {
    url = `https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/vehicles/${id}.jpg`;
  } else {
    url = require(`../../img/vehicles/${id}.jpg`);
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
        <li>Vehicle class: {vehicle_class}</li>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: rgb(64,64,64);
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