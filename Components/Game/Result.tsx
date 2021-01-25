import React from "react";
import { useSelector } from "react-redux";
import { store } from "../../reducers/types";

interface Props {}

function Result({ results }) {
  return <p>{results}</p>;
}

export default Result;
