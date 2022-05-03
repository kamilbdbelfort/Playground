// src/components/assets/Person.js
import React from "react";
import styled from "styled-components";
import useApi from "../../lib/useApi";

export default function Person({id, name, gender, height, hair_color, mass, homeworld}) {
  const url = `https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/${id}.jpg`;
  const resApi = useApi(homeworld);
  let homeworldName;
  if(resApi.status === "success") {
    homeworldName = resApi.data.name;
  }

  return (
    <>
      <Container>
        <h3>
          <strong>{name}</strong>
        </h3>
        <br/>
        <img title={name} style={{borderRadius: '50%', width: '250px', height: '250px'}} src={url} alt={name}/>
        <li>Gender: {gender}</li>
        <li>Height, cm: {height}</li>
        <li>Hair color: {hair_color}</li>
        <li>Mass, kg: {mass}</li>
        <li>Homeworld: {homeworldName}</li>

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