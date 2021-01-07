import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Typography, IconButton} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {ListItemText, List} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import DataObj from "../Data"
import "./Header.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }
}));

export default function MenuAppBar(props) {
  const classes = useStyles();
  const [openMenu,setOpenMenu] =useState(false)
const handleDrawerClose=()=>{
  setOpenMenu(false)
}
  return (
    <div className={classes.root}>
      <AppBar
        className="head"
        position="static"
        style={{ backgroundColor: DataObj.backGroundColor }}
      >
        <Toolbar>
          {props.name&&(
            <IconButton edge="start" className={classes.menuButton} color="inherit" 
            aria-label="menu" onClick={()=>{setOpenMenu(true)}}>
                <MenuIcon />
              </IconButton>
          )}
          <Typography
            variant="h5"
            className={classes.title}
            style={{
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color:DataObj.fontColor
            }}
          >
            {props.name?props.name: DataObj.firmName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={openMenu}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {[{name:"Theme",Icon:""},{name:"Products",Icon:""},{name:"Company Info",Icon:""}].map((fld, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={fld.name} />
            </ListItem>
          ))}
        </List>
        
        
      </Drawer>
      
    
    </div>
  );
}
