import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from "./List"


const useStyles = makeStyles((theme) => ({
  root: {
    width: '99%',
    marginRight:"1%",
    marginLeft:"1%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions(props) {
    
  const classes = useStyles();
  const [data,setData]=React.useState(props.data)
  console.log(data)
  useEffect(() => {
      if(props.data)
       { setData(props.data)}
  }, [props.data])
  const [expanded, setExpanded] = React.useState('panel0');
console.log("2",data)
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root} >
      {Object.keys(data).map((fld,index)=>{return(
        <div style={{marginTop:"2%"}}>
         <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} >
         <AccordionSummary
           expandIcon={<ExpandMoreIcon style={{color:"white"}} />}
           aria-controls="panel1bh-content"
           id="panel1bh-header"
           style={{backgroundColor:"#8d1a2b"}}
         >
           <Typography variant="h5" style={{alignContent:'center', color:"white"}}>{fld}</Typography>
           {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
         </AccordionSummary>
         <AccordionDetails>
          <List data={props.data[fld]}/>
         </AccordionDetails>
       </Accordion> 
      </div>
      )})}
     
       </div>
  );
}
