import React from "react";
import TextInput from "./Form/TextInput";
import ColorPicker from "./Form/ColorPicker";
import Imageupload from "./Form/Imageupload";

function Form(props) {
  const { fldArr, fldsInRow } = props;
  console.log(props);
  return (
    <div className="row-fluid d-flex flex-wrap w-100">
      {fldArr &&
        fldArr.map((fld) => {
          if (fld.type === "colorPicker") {
            return (
              <div className={`col-md-${12/fldsInRow} mt-1`}>
                <ColorPicker fld={fld} dClass={props.dClass} onChange={props.onChange}/>
              </div>
            );
          }
          if (fld.type === "Text") {
            return (
              <div className={`col-md-${12/fldsInRow} mt-1`}>
                <TextInput fld={fld} dClass={props.dClass} onChange={props.onChange}/>
              </div>
            );
          }
          if (fld.type === "Imageupload") {
            return (
              <div className={`col-md-${12/fldsInRow} mt-1`}>
                <Imageupload fld={fld} dClass={props.dClass} onChange={props.onChange}/>
              </div>
            );
          }
        })}
    </div>
  );
}

export default Form;
