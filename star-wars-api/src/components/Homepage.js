// src/components/Homepage.js
import React from "react";
import useApi from "../lib/useApi";
import SwapiThread from "../screens/SwapiThread";
import styled from "styled-components";

export default function Homepage() {
  const api = "https://swapi.dev/api";
  const request = useApi(api);
  let props;
  if(request.status === "success") {
    props = {
      "category": "homepage",
      "data": request.data
    }
    console.log("In homepage", props);
  }

  return (
    <Container>
      {props?<SwapiThread key={props.id} props={props}/>:<p>Loading...</p>}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;