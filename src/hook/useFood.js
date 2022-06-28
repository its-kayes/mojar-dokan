import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../components/Shared/Loading';

let loader = <p> Please Wait ... </p>;
const useFood = () => {
  let { data: food, isLoading } = useQuery('food', () =>
    fetch('http://localhost:8000/fruits').then((res) => res.json())
  );

  if (isLoading) {
    return <Loading> </Loading>;
    // return loader;
  }

  return food;
};

export default useFood;
