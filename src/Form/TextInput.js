import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

function TextInput(props) {
  const { fld } = props;
  const [value, setValue] = useState(" ");
  const handleTextChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="w-100">
      <form noValidate autoComplete="off">
        <TextField
          style={{ width: "100%" }}
          id="standard-basic"
          value={value}
          label={fld.label}
          onChange={(e) => handleTextChange(e)}
        />
      </form>
    </div>
  );
}

export default TextInput;
