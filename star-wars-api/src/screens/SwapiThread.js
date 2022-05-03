// src/screens/SwapiThread.js
import React, {useState} from "react";
import styled from "styled-components";
import Person from "../components/assets/Person";
import Planet from "../components/assets/Planet";
import Film from "../components/assets/Film";
import SpeciesOne from "../components/assets/SpeciesOne"
import Pagination from "../components/utils/Pagination";
import Vehicle from "../components/assets/Vehicle";
import Starship from "../components/assets/Starship";

export default function SwapiThread({setPage, pageIndex, props}) {
  const {category, data} = props;
  const [searchQuery, setSearchQuery] = useState("");

  let pageCountArray;
  if (category !== "homepage") {
    const pageCount = Math.ceil(data.count / 10);
    pageCountArray = Array.from(Array(pageCount).keys());
  }

  return (
    <Container>
      {
        (category === "homepage") ? (
          <>
            <h1>Welcome to Star Wars API</h1>
          </>
        ) : null
      }
      {
        (category === "people") ? (
          <>
            <input placeholder={"Search " + category} onChange={event => setSearchQuery(event.target.value)}/>
            <p>Count people: {data.count}</p>
            <Items>
              {search(data, searchQuery).map((result) => {
                return (
                  <Person
                    id={getId(parseInt(result.url.split(/[:/.]/)[7]), pageIndex)}
                    name={result.name}
                    gender={result.gender}
                    height={result.height}
                    hair_color={result.hair_color}
                    mass={result.mass}
                    homeworld={result.homeworld}
                  />
                )
              })}
            </Items>
            <Pagination pageCountArray={pageCountArray} setPage={setPage}/>
          </>
        ) : null
      }
      {
        (category === "planets") ? (
          <>
            <input placeholder={"Search " + category} onChange={event => setSearchQuery(event.target.value)}/>
            <p>Count planets: {data.count}</p>
            <Items>
              {search(data, searchQuery).map((result) => {
                return (
                  <Planet
                    id={getId(parseInt(result.url.split(/[:/.]/)[7]), pageIndex)}
                    name={result.name}
                    rotation_period={result.rotation_period}
                    orbital_period={result.orbital_period}
                    diameter={result.diameter}
                    climate={result.climate}
                    gravity={result.gravity}
                    terrain={result.terrain}
                    population={result.population}
                  />
                )
              })}
            </Items>
            <Pagination pageCountArray={pageCountArray} setPage={setPage}/>
          </>
        ) : null
      }
      {
        (category === "films") ? (
          <>
            <input placeholder={"Search " + category} onChange={event => setSearchQuery(event.target.value)}/>
            <p>Count films: {data.count}</p>
            <Items>
              {search(data, searchQuery).map((result) => {
                return (
                  <Film
                    id={getId(parseInt(result.url.split(/[:/.]/)[7]), pageIndex)}
                    title={result.title}
                    episode_id={result.episode_id}
                    director={result.director}
                    producer={result.producer}
                    release_date={result.release_date}
                  />
                )
              })}
            </Items>
            <Pagination pageCountArray={pageCountArray} setPage={setPage}/>
          </>
        ) : null
      }
      {
        (category === "species") ? (
          <>
            <input placeholder={"Search " + category} onChange={event => setSearchQuery(event.target.value)}/>
            <p>Count species: {data.count}</p>
            <Items>
              {search(data, searchQuery).map((result) => {
                return (
                  <SpeciesOne
                    id={getId(parseInt(result.url.split(/[:/.]/)[7]), pageIndex)}
                    name={result.name}
                    classification={result.classification}
                    designation={result.designation}
                    average_height={result.average_height}
                    skin_colors={result.skin_colors}
                    hair_colors={result.hair_colors}
                    eye_colors={result.eye_colors}
                    average_lifespan={result.average_lifespan}
                    homeworld={result.homeworld}
                    language={result.language}
                  />
                )
              })}
            </Items>
            <Pagination pageCountArray={pageCountArray} setPage={setPage}/>
          </>
        ) : null
      }
      {
        (category === "vehicles") ? (
          <>
            <input placeholder={"Search " + category} onChange={event => setSearchQuery(event.target.value)}/>
            <p>Count vehicles: {data.count}</p>
            <Items>
              {search(data, searchQuery).map((result) => {
                return (
                  <Vehicle
                    id={getId(parseInt(result.url.split(/[:/.]/)[7]), pageIndex)}
                    name={result.name}
                    model={result.model}
                    cost_in_credits={result.cost_in_credits}
                    length={result.length}
                    max_atmosphering_speed={result.max_atmosphering_speed}
                    crew={result.crew}
                    passengers={result.passengers}
                    cargo_capacity={result.cargo_capacity}
                    consumables={result.consumables}
                    vehicle_class={result.vehicle_class}
                  />
                )
              })}
            </Items>
            <Pagination pageCountArray={pageCountArray} setPage={setPage}/>
          </>
        ) : null
      }
      {
        (category === "starships") ? (
          <>
            <input placeholder={"Search " + category} onChange={event => setSearchQuery(event.target.value)}/>
            <p>Count starships: {data.count}</p>
            <Items>
              {search(data, searchQuery).map((result) => {
                return (
                  <Starship
                    id={getId(parseInt(result.url.split(/[:/.]/)[7]), pageIndex)}
                    name={result.name}
                    model={result.model}
                    cost_in_credits={result.cost_in_credits}
                    length={result.length}
                    max_atmosphering_speed={result.max_atmosphering_speed}
                    crew={result.crew}
                    passengers={result.passengers}
                    cargo_capacity={result.cargo_capacity}
                    consumables={result.consumables}
                    hyperdrive_rating={result.hyperdrive_rating}
                    MGLT={result.MGLT}
                    starship_class={result.starship_class}
                  />
                )
              })}
            </Items>
            <Pagination pageCountArray={pageCountArray} setPage={setPage}/>
          </>
        ) : null
      }
    </Container>
  );
}

const Container = styled.div`
  flex: auto;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  
  input {
    width: 25%;
    height: 25px; 
    color: rgb(224,191,0); 
    background-color: rgb(32,32,32);
    font-weight: bold;
    border-style:solid; 
    border-color: rgb(224,191,0); 
    border-width: medium;
  }
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function search(data, searchQuery) {
  return data.results.filter(search => {
    if (searchQuery === "") {
      return search;
    } else if (search.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return search;
    }
  });
}

function getId(index, pageIndex) {
  const id = index;
  return id;
}