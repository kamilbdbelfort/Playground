// src/components/categories/Vehicles.js
import React, {useState} from "react";
import useApi from "../../lib/useApi";
import SwapiThread from "../../screens/SwapiThread";

export default function Vehicles() {
  const [page, setPage] = useState(1);
  let api;
  if(page === 1){
    api = "https://swapi.dev/api/vehicles/";
  } else {
    api = `https://swapi.dev/api/vehicles/?page=${page}`;
  }
  const resApi = useApi(api);

  let props;
  if(resApi.status === "success") {
    props = {
      "category": "vehicles",
      "data": resApi.data
    }
  }

  return (
    <>
      {props?<SwapiThread setPage={setPage} pageIndex={page} props={props}/>:<p>Loading...</p>}
    </>
  )
}