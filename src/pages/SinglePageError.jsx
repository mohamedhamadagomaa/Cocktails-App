import React from "react";
import { useRouteError } from "react-router-dom";
const SinglePageError = () => {
  const error = useRouteError();
  return <h2>There Was An Error</h2>;
};

export default SinglePageError;
