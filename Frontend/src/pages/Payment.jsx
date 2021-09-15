import React, { Fragment } from "react";
import { useSelector } from "react-redux";

export function Payment() {
  const { cardComLink } = useSelector((state) => state.mediaModule);
  return (
    <Fragment>
      <iframe src={cardComLink} width="480" height="800" title="cardComApi"></iframe>
    </Fragment>
  );
}
