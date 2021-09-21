//REACT
import React, { useEffect } from "react";
//REDUX
import { useDispatch } from "react-redux";
import { setMediaType, setMediaLink } from "../store/action.js";
//MATERIAL-UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const mediaTypes = [
  {
    value: "instegram",
    label: "לינק לאינסטגרם",
  },
  {
    value: "facebook",
    label: "לינק לפייסבוק",
  },
  {
    value: "tiktok",
    label: "לינק לטיקטוק",
  },
  {
    value: "twitter",
    label: "לינק לטוויטר",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "32ch",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#9469dd",
      },
      "&:hover fieldset": {
        borderColor: "#9469dd",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#9469dd",
      },
    },
  },
}));

export function MediaDetails() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [type, setType] = React.useState("instegram");
  const [linkType, setLinkType] = React.useState("לינק לאינסטגרם");
  
  const [link, setLink] = React.useState("some link");

  useEffect(() => {
    dispatch(setMediaType(type));
    dispatch(setMediaLink(link));
  }, [type, link]);

  const handleChangeSelect = ({ target }) => {
    setType(target.value);
    setLinkType(setLableLink(target.value));
  };
  const handleChangeLink = ({ target }) => {
    setLink(target.value);
  };

  const setLableLink = (value) => {
    const currMediaTypes = mediaTypes.filter((option) => {
      const type = option.value === value;
      return type;
    });
    return currMediaTypes[0].label;
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="select">
        <TextField
          id="outlined-select-currency"
          select
          label=""
          value={type}
          onChange={handleChangeSelect}
          helperText=""
          variant="outlined"
        >
          {mediaTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className="txt-link">
        <TextField
          label={`הזינו כאן ${linkType} שלכם`}
          variant="outlined"
          name="userLink"
          onChange={handleChangeLink}
          required
        />
      </div>
    </form>
  );
}
