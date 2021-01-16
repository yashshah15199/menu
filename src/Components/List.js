import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Img from "../assests/images/product-1.jpg";
import DataObj from "../Data"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function AlignItemsList(props) {
  const classes = useStyles();
  const [data, setData] = useState(props.data ? props.data : [""]);
  console.log("3", data, props.data);
  useEffect(() => {
    if (props.data) {
      setData(props.data);
    }
  }, [props.data]);
  return (
    <List className={classes.root}>
      {data.map((fld) => {
        return (
          <div style={{fontStyle:DataObj.fontStyle,fontFamily:DataObj.fontFamily}}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={Img} />
              </ListItemAvatar>
              <ListItemText
                primary={fld.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {fld.description}
                    </Typography>
                  </React.Fragment>
                }
              />
              {/* Ekta-To bring description in center */}
              {/* <div style={{marginRight:"25%"}} >
              {fld.description}
              </div> */}
              
              Rs.{fld.price}
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        );
      })}
    </List>
  );
}
