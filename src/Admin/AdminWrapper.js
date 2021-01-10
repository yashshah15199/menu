import { Typography,Button} from "@material-ui/core";
import React,{useState} from "react";
import Form from "../Form";
import JSON from "../formJson.json";
import MultiData from "../Form/MultiForm";
import DataObj from "../Data"
import "./AdminWrapper.css"

function AdminWrapper(props) {
  const[submit,setSubmit]=useState({})
  const design = "col-lg-6 col-md-6 col-sm-12";
  if (props.selectedMenu === 1) {
    let obj = {};
    const formChange = (value, id) => {
      console.log(value, id);
      obj[id] = value;
    };
    
    return (
      <div>
        <Form
          fldArr={JSON["Theme"].fields}
          dClass={design}
          onChange={formChange}
          fldsInRow={3}
        />
        <MultiData flds={JSON["Theme"].multiple} />
      </div>
    );
  } else if (props.selectedMenu === 2) {
    return <div>123</div>;
  } else if (props.selectedMenu === 3) {
    
    let obj = {};
    const formChange = (value, id) => {
      console.log(value, id);
      obj[id] = value;
    };
    const handleSubmitclick=()=>{
      console.log("obj",obj)
      setSubmit(obj)
    }
    return (
      <div>
        <div className="m-2" style={{ width: "100%", textAlign: "center" }}>
          <Typography variant="h5"> Company Info</Typography>
        </div>
        <Form fldArr={JSON["CompanyInfo"].fields} onChange={formChange}  fldsInRow={3}/>
        <div style={{padding:"1%"}}>
        <Button
        className="button m-3"
        variant="contained"
        onClick={handleSubmitclick}
        style={{backgroundColor:DataObj.backGroundColor,color:DataObj.fontColor}}
      >
       Submit
      </Button>

        </div>
       
      </div>
    );
  }
}

export default AdminWrapper;
