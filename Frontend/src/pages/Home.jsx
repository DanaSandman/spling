import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import TapTouchImg from "../assets/img/TapTouch.jpg";

import { MediaDetails } from "../cmps/MediaDetails.jsx";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    // margin: theme.spacing(1),
    backgroundColor: "#9469dd",
    margin: "0px",
  },
}));

export function Home() {
  const classes = useStyles();
  return (
    <Fragment>
        <title> Home page</title>
        <h2 className="main-title">טאץ׳ והחלפתם פרטים</h2>
        <img src={TapTouchImg} className="main-img" alt="main-img" />
        <h4 className="paragraph">?אז מה תרצו שהספלינג שלכם יעשה</h4>
        <MediaDetails/>
        <h4 className="paragraph"> !עלות התג 49 ש״ח בלבד כולל משלוח</h4>
        <Button className={classes.button} variant="contained" disableElevation>
          <Link to="/order"> 〱 הזמינו עכשיו</Link>
        </Button>
    </Fragment>
  );
}
