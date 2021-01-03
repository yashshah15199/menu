import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      margin: "1%",
      padding: "1%",
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
    props.handleSearch(e.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      {/* <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" /> */}
      <TextField
        value={value}
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={handleChange}
      />
    </form>
  );
}
