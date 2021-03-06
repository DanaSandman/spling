import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { orderCompleted } from "../store/action.js";

import arrowIcon from "../assets/img/leftarrowicon.png";
import { LongTxt } from "../cmps/LongTxt.jsx";
import { Header } from "../cmps/Header.jsx";
import { FbPixel } from "../cmps/FbPixel.jsx";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#9469dd",
    margin: "0px",
    color: "#fff",
  },
}));

export function CompleteOrder() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { mediaType, mediaLink, orderDetails, lowProfileCode } = useSelector(
    (state) => state.mediaModule
  );

  const currOreder = {
    mediaType,
    mediaLink,
    orderDetails,
    lowProfileCode,
  };
  const address =
    "עיר: " +
    currOreder.orderDetails.address.city +
    " | " +
    "רחוב: " +
    currOreder.orderDetails.address.street +
    " | " +
    "מס בית: " +
    currOreder.orderDetails.address.number;

  useEffect(() => {
    dispatch(orderCompleted(currOreder));
  }, []);

  return (
    <Fragment>
      <Header />
      <FbPixel />
      <div className="complete-order flex column">
        <h3>פרטי הזמנה</h3>
        <div className="order-details">
          <h4>{currOreder.mediaType} :סוג הלינק</h4>
          <p className="link-to-order">:כתובת הלינק</p>
          <LongTxt description={currOreder.mediaLink} />
        </div>
        <div className="user-details">
          <h4> שם מלא: {currOreder.orderDetails.fullName}</h4>
          <h4>{currOreder.orderDetails.phoneNumber} :טלפון</h4>
          <h4>{currOreder.orderDetails.email} :אימייל</h4>
          <h3>כתובת למשלוח</h3>
          <LongTxt description={address} />
        </div>
      </div>
      <Link to="/payment">
        <Button variant="contained" className={classes.button} disableElevation>
        <img src={arrowIcon} className="arrow-icon" alt="arrow-icon" /> מעבר לתשלום
        </Button>
      </Link>
    </Fragment>
  );
}
