// src/components/assets/SpeciesOne.js
import React from "react";
import styled from "styled-components";


export default function SpeciesOne(props) {
  const {id, name, classification, designation, average_height, skin_colors, hair_colors
  ,eye_colors, average_lifespan, homeworld, language} = props;
  const url = `https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/species/${id}.jpg`;

  return (
    <>
      <Container>
        <h3>
          <strong>{name}</strong>
        </h3>
        <br/>
        <img title={name} style={{borderRadius: '50%', width: '250px', height: '250px'}} src={url} alt={name}/>
        <li>Classification: {classification}</li>
        <li>Designation: {designation}</li>
        <li>Average height, cm: {average_height}</li>
        <li>Skin colors: {skin_colors}</li>
        <li>Hair colors: {hair_colors}</li>
        <li>Eye colors: {eye_colors}</li>
        <li>Average lifespan: {average_lifespan}</li>
        <li>Homeworld: {homeworld}</li>
        <li>Language: {language}</li>
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