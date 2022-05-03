// src/components/utils/Searchbar.js
import React, {useState} from "react";
import styled from "styled-components";

export default function Searchbar({category, data, setSearchedData}) {
  const [searchQuery, setSearchQuery] = useState("");
  data.results = data.results.filter(search => {
    if (searchQuery === "") {
      return search;
    } else if (search.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return search;
    }
  });
  console.log("search:", data);

  return (
    <Container>
      <input placeholder={"Search " + category} onChange={event => setSearchQuery(event.target.value)}/>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;
