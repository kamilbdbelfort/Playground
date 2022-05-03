// src/components/categories/Planets.js
import React, {useState} from "react";
import useApi from "../../lib/useApi";
import SwapiThread from "../../screens/SwapiThread";

export default function Planets() {
  const [page, setPage] = useState(1);
  let api;
  if(page === 1){
    api = "https://swapi.dev/api/planets/";
  } else {
    api = `https://swapi.dev/api/planets/?page=${page}`;
  }
  const resApi = useApi(api);

  let props;
  if(resApi.status === "success") {
    props = {
      "category": "planets",
      "data": resApi.data
    }
  }

  return (
    <>
      {props?<SwapiThread setPage={setPage} pageIndex={page} props={props}/>:<p>Loading...</p>}
    </>
  )
}