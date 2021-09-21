import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { OrderForm } from "../cmps/OrderForm.jsx";
import { Header } from "../cmps/Header.jsx";
import { FbPixel } from "../cmps/FbPixel.jsx";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#9469dd",
    margin: "0px",
  },
}));

export function Order() {
  const classes = useStyles();

  return (
    <Fragment>
      <Header />
      <FbPixel />
      <h3 className="order-page">פרטים למשלוח</h3>
      <OrderForm></OrderForm>
      <Button variant="contained" className={classes.button} disableElevation>
        <Link to="/completeorder"> 〱 רכוש עכשיו</Link>
      </Button>
    </Fragment>
  );
}
