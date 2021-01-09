import React from "react";
import TextInput from "./Form/TextInput";
import ColorPicker from "./Form/ColorPicker";
import Imageupload from "./Form/Imageupload";

function Form(props) {
  const { fldArr } = props;
  console.log(fldArr);
  return (
    <div className="row-fluid d-flex flex-wrap w-100">
      {fldArr &&
        fldArr.map((fld) => {
          if (fld.type === "colorPicker") {
            return (
              <div className="col-md-4 mt-1">
                <ColorPicker fld={fld} dClass={props.dClass} />
              </div>
            );
          }
          if (fld.type === "Text") {
            return (
              <div className="col-md-4 mt-1">
                <TextInput fld={fld} dClass={props.dClass} />
              </div>
            );
          }
          if (fld.type === "Imageupload") {
            return (
              <div className="col-md-4 mt-1">
                <Imageupload fld={fld} dClass={props.dClass} />
              </div>
            );
          }
        })}
    </div>
  );
}

export default Form;
