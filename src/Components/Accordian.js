import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "./List";
import DataObj from "../Data"

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

export default function ControlledAccordions(props) {
  const classes = useStyles();
  const [data, setData] = React.useState(props.data);
  console.log(data);
  useEffect(() => {
    if (props.data) {
      setData(props.data);
    }
  }, [props.data]);

  return (
    <div className={classes.root}>
      {Object.keys(data).map((fld, index) => {
        if (props.data[fld].length > 0) {
          return <SingleAcc data={props.data[fld]} fld={fld} />;
        }
      })}
    </div>
  );
}

function SingleAcc(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel0");
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
            {props.fld}
          </Typography>
          {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <List data={props.data} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
