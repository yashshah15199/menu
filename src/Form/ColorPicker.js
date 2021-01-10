import React, { useState } from "react";
import { Typography, TextField } from "@material-ui/core";

function ColorPicker(props) {
  console.log(props);
  const { fld,val } = props;
  const [color, setColor] = useState(val?val:null);
  const handleChange = (e) => {
    console.log(e.target.value);
    setColor(e.target.value);
    props.onChange(e.target.value,fld.id)
  };
  return (
    <div className="d-flex">
      <Typography style={{ marginTop: "1%" }}>{fld.label}</Typography>{" "}
      &nbsp;&nbsp;
      {/* <p>{fldJson.type}</p> &nbsp; */}
      <input
        type="color"
        style={{ marginTop: "1%" }}
        value={color}
        onChange={handleChange}
      />
      &nbsp;&nbsp;
      <TextField id="standard-basic" value={color} onChange={handleChange} />
    </div>
  );
}

export default ColorPicker;
