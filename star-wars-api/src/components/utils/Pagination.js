// src/components/utils/Pagination.js
import React from "react";
import styled from "styled-components";

export default function Pagination({pageCountArray, setPage}) {

  return (
    <Container>
      {pageCountArray.map(page => {
        return (
          <Button onClick={() => setPage(page + 1)}>{page + 1}</Button>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Button = styled.div`
  display flex;
  justify-content: center;
  width: 4%;
  margin: 0px 5px 10px 5px;
  padding: 5px 5px 5px 5px;
  &:hover {
    background-color: rgb(224,191,0);
  }
  border-style:solid; 
  border-color: rgb(224,191,0); 
  borderWidth: medium;
  background-color: rgb(32,32,32);
`;
