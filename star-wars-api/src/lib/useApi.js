import {useEffect, useState} from "react";
import axios from "axios";

export default function useApi(api) {
  const [state, setState] = useState({status: "loading"});

  useEffect(() => {
    async function fetchData() {
      setState({status: "loading"});
      try {
        const res = await axios.get(
          api
        );
        setState({status: "success", data: res.data});
      } catch (error) {
        setState({status: "error", error});
      }
    }

    fetchData();
  }, [setState, api]);

  return state;
}