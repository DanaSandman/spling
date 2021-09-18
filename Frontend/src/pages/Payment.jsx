import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Header } from "../cmps/Header.jsx";

export function Payment() {
  const { cardComLink } = useSelector((state) => state.mediaModule);
  return (
    <Fragment>
      <Header/>
      <iframe
        src={cardComLink}
        width="480"
        height="800"
        title="cardComApi"
      ></iframe>
    </Fragment>
  );
}
