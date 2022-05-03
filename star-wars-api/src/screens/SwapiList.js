// src/categories/SwapiList.js
import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import useApi from "../lib/useApi";

export default function SwapiList() {
  const request = useApi("https://swapi.dev/api/");
  let items = [];
  if (request.status === "success") {
    for (const dataKey in request.data) {
      items.push(dataKey);
    }
  }

  return (
    <div>
      <Container>
        {items.map((item) => {
          return (
            <Item key={items.indexOf(item)} to={item}>{item}</Item>
          )
        })}
      </Container>
    </div>
  );
}

const Container = styled.div`
  flex: 0 0 260px;
  padding: 0.5rem 0;
  border-right: 1px solid #ddd;
`;

const Item = styled(NavLink)`
  display: block;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  text-decoration: none;
  color: rgb(224,191,0);
  font-style: bold;

  &:focus {
    background: #f5f5f5;
  }

  &:active {
    background: #eee;
  }

  /* automatically added by react-router-dom */
  &.active {
    color: white;
    background: #333;
  }
`;