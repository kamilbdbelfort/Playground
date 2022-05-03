// src/components/assets/Planet.js
import React from "react";
import styled from "styled-components";


export default function Film(props) {
  const {id, title, episode_id, director, producer, release_date} = props;
  const url = `https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/films/${id}.jpg`;

  return (
    <>
      <Container>
        <h3>
          <strong>{title}</strong>
        </h3>
        <br/>
        <img title={title} style={{borderRadius: '50%', width: '250px', height: '250px'}} src={url} alt={title}/>
        <li>Episode ID: {episode_id}</li>
        <li>Director: {director}</li>
        <li>Producer: {producer}</li>
        <li>Release date: {release_date}</li>
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