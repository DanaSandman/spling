import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import arrowIcon from "../assets/img/leftarrowicon.png";
import TapTouchImg from "../assets/img/TapTouch.jpg";
import { Header } from "../cmps/Header.jsx";
import { FbPixel } from "../cmps/FbPixel.jsx";
import { MediaDetails } from "../cmps/MediaDetails.jsx";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#9469dd",
    margin: "0px",
    color: "#fff",
  },
}));

export function Home() {
  const classes = useStyles();
  return (
    <Fragment>
      <Header />
      <FbPixel />
      <title> Home page</title>
      <h2 className="main-title">טאץ׳ והחלפתם פרטים</h2>
      <img src={TapTouchImg} className="main-img" alt="main-img" />
      <h4 className="paragraph">?אז מה תרצו שהספלינג שלכם יעשה</h4>
      <div className="media-details">
        <MediaDetails />
      </div>
      <h4 className="paragraph"> !עלות התג 49 ש״ח בלבד כולל משלוח</h4>

      <Link to="/order">
        <Button className={classes.button} variant="contained" disableElevation>
          <img src={arrowIcon} className="arrow-icon" alt="arrow-icon" /> הזמינו
          עכשיו
        </Button>
      </Link>
    </Fragment>
  );
}
