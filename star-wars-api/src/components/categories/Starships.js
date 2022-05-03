// src/components/categories/Starships.js
import React, {useState} from "react";
import useApi from "../../lib/useApi";
import SwapiThread from "../../screens/SwapiThread";

export default function Starships() {
  const [page, setPage] = useState(1);
  let api;
  if(page === 1){
    api = "https://swapi.dev/api/starships/";
  } else {
    api = `https://swapi.dev/api/starships/?page=${page}`;
  }
  const resApi = useApi(api);

  let props;
  if(resApi.status === "success") {
    props = {
      "category": "starships",
      "data": resApi.data
    }
  }

  return (
    <>
      {props?<SwapiThread setPage={setPage} pageIndex={page} props={props}/>:<p>Loading...</p>}
    </>
  )
}