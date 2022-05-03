// src/components/categories/Species.js
import React, {useState} from "react";
import useApi from "../../lib/useApi";
import SwapiThread from "../../screens/SwapiThread";

export default function Species() {
  const [page, setPage] = useState(1);
  let api;
  if(page === 1){
    api = "https://swapi.dev/api/species/";
  } else {
    api = `https://swapi.dev/api/species/?page=${page}`;
  }
  const resApi = useApi(api);

  let props;
  if(resApi.status === "success") {
    props = {
      "category": "species",
      "data": resApi.data
    }
  }

  return (
    <>
      {props?<SwapiThread setPage={setPage} pageIndex={page} props={props}/>:<p>Loading...</p>}
    </>
  )
}