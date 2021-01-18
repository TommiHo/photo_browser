import React from "react";
import { useHistory } from "react-router-dom";

export default function Header(): JSX.Element {
  const history = useHistory();

  return (
    <div onClick={() => history.push("/")}>
      <h1>Photo browser</h1>
    </div>
  );
}
