import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Header } from "../cmps/Header.jsx";
import { FbPixel } from "../cmps/FbPixel.jsx";

export function Payment() {
  const { cardComLink } = useSelector((state) => state.mediaModule);
  return (
    <Fragment>
      <Header />
      <FbPixel />
      <iframe
        src={cardComLink}
        width="480"
        height="800"
        title="cardComApi"
      ></iframe>
    </Fragment>
  );
}
