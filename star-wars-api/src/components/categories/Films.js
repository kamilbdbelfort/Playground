// src/components/categories/Films.js
import React, {useState} from "react";
import useApi from "../../lib/useApi";
import SwapiThread from "../../screens/SwapiThread";

export default function Films() {
  const [page, setPage] = useState(1);
  let api= "https://swapi.dev/api/films/";
  const resApi = useApi(api);

  let props;
  if(resApi.status === "success") {
    props = {
      "category": "films",
      "data": resApi.data
    }
  }

  return (
    <>
      {props?<SwapiThread setPage={setPage} pageIndex={page} props={props}/>:<p>Loading...</p>}
    </>
  )
}