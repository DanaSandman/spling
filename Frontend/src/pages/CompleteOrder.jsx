import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { orderCompleted } from "../store/action.js";

import { LongTxt } from "../cmps/LongTxt.jsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Header } from "../cmps/Header.jsx";

const useStyles = makeStyles((theme) => ({
  button: {
    // margin: theme.spacing(1),
    backgroundColor: "#9469dd",
    margin: "0px",
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
      <Header/>
      <div className="complete-order flex column">
        <h3>-פרטי הזמנה</h3>
        <div className="order-details">
          <h4>{currOreder.mediaType} :סוג הלינק</h4>
          <p className="link-to-order">:כתובת הלינק</p>
          <LongTxt description={currOreder.mediaLink} />
        </div>
        <div className="user-details">
          <h4> שם מלא: {currOreder.orderDetails.fullName}</h4>
          <h4>{currOreder.orderDetails.phoneNumber} :טלפון</h4>
          <h4>{currOreder.orderDetails.email} :אימייל</h4>
          <h3>-כתובת למשלוח</h3>
          <LongTxt description={address} />
        </div>
      </div>
      {/* <div> */}
      <Button variant="contained" className={classes.button} disableElevation>
        <Link to="/payment"> 〱 מעבר לתשלום</Link>
      </Button>
      {/* </div> */}
    </Fragment>
  );
}
