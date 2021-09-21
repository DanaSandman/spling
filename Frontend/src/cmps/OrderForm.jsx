import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TextField } from "@material-ui/core";

import { setOrderDetails } from "../store/action.js";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#9469dd",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#9469dd",
      },
    },
  },
}));

export function OrderForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const initialUserOrder = {
    fullName: "",
    phoneNumber: 0,
    email: "",
    address: {
      city: "",
      street: "",
      number: 0,
    },
  };
  const [order, setOrder] = useState(initialUserOrder);

  useEffect(() => {
    dispatch(setOrderDetails(order));
  }, [order]);

  const handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    field === "city" || field === "street" || field === "number"
      ? setOrder({ ...order, address: { ...order.address, [field]: value } })
      : setOrder({ ...order, [field]: value });
  };
  return (
    <form className={classes.root}>
      <TextField
        label="שם מלא"
        variant="outlined"
        name="fullName"
        value={order.fullName}
        onChange={handleChange}
        required
      />
      <TextField
        label="טלפון"
        variant="outlined"
        name="phoneNumber"
        value={order.phoneNumber}
        onChange={handleChange}
        required
      />
      <TextField
        label="אימייל"
        variant="outlined"
        name="email"
        value={order.email}
        onChange={handleChange}
        required
      />
      <h4>כתובת למשלוח</h4>
      <TextField
        label="עיר"
        variant="outlined"
        name="city"
        onChange={handleChange}
        required
      />
      <TextField
        label="רחוב"
        variant="outlined"
        name="street"
        onChange={handleChange}
        required
      />
      <TextField
        label="מס בית"
        variant="outlined"
        name="number"
        onChange={handleChange}
        required
      />
    </form>
  );
}
