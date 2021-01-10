import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import {Typography,Button, TextField} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MultiData from "../Form/MultiForm"
import DataObj from "../Data"
import JSON from "../formJson.json"
import "./AdminWrapper.css"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // marginRight: "1%",
    // marginLeft: "1%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

let data={}
// {
//     Pizza: [
//       { name: "pizza", value: 100, description: "double cheese with olives" },
//       {
//         name: "margerate pizza",
//         value: 200,
//         description: "double cheese with olives",
//       },
//     ],
//     SandWich: [
//       { name: "Sandwitch", value: 100, description: "double cheese with olives" },
//       {
//         name: "club pizza",
//         value: 200,
//         description: "double cheese with olives",
//       },
//     ],
// }

export default function ControlledAccordions(props) {
 
  const classes = useStyles();
  // const [data, setData] = React.useState(props.data);
  const[update,doUpdate]=React.useState(true)
const [val,setVal]=React.useState("")
  return (
    <div className="m-2">
        <div className="m-2">
        <TextField
        style={{width:"45%",margin:"1%"}}
        value={val}
        onChange={(e)=>{
            setVal(e.target.value)
        }}
        />
        <Button
        className="button"
        variant="contained"
        style={{ backgroundColor:DataObj.backGroundColor,color:DataObj.fontColor, margin:"1%"}}
onClick={()=>{
    data[val]=[]
    doUpdate(!update)
}}
      >
        Add Product
      </Button>
        </div>
       
      {Object.keys(data).map((fld)=>{
          return( <SingleAcc name={fld} value={data[fld]}/>)
      })}
     
    </div>
  );
}

function SingleAcc(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div style={{ marginTop: "2%" }}>
      <Accordion
        expanded={expanded === `panel`}
        onChange={handleChange(`panel`)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: DataObj.fontColor }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          style={{ backgroundColor: DataObj.backGroundColor }}
        >
          <Typography
            variant="h5"
            style={{ alignContent: "center", color: DataObj.fontColor }}
          >
            {props.name}
          </Typography>
          {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
        <MultiData flds={JSON["Product"].multiple} />
          {/* <List data={props.data} /> */}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
