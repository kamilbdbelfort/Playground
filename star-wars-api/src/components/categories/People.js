// src/components/categories/People.js
import React, {useState} from "react";
import useApi from "../../lib/useApi";
import SwapiThread from "../../screens/SwapiThread";

export default function People() {
  const [page, setPage] = useState(1);
  let api;
  if(page === 1){
    api = "https://swapi.dev/api/people/";
  } else {
    api = `https://swapi.dev/api/people/?page=${page}`;
  }
  const resApi = useApi(api);

  let props;
  if(resApi.status === "success") {
    props = {
      "category": "people",
      "data": resApi.data
    }
  }

  return (
    <>
      {props?<SwapiThread setPage={setPage} pageIndex={page} props={props}/>:<p>Loading...</p>}
    </>
  )
}