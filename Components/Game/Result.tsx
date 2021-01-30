import React from "react";
import { useSelector } from "react-redux";
import { store } from "../../reducers/types";

interface Props {}

function Result({ results }) {
  return (
    <>
      {results.map((result) => (
        <p>{result}</p>
      ))}
    </>
  );
}

export default Result;
