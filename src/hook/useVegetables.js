import React from "react";
import { useQuery } from "react-query";
import Loading from "../components/Shared/Loading";

const useVegetables = () => {
  let {data: vegetables,isLoading} = useQuery("vegetables", () =>
    fetch("vegetables.json").then((res) => res.json())
  );
  if(isLoading){
    return <Loading></Loading>
  }
  return vegetables;
};

export default useVegetables;
