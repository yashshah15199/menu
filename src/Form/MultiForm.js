import React from "react";
import { Button } from "@material-ui/core";

import { Dialog, withStyles, Paper } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Form from "../Form";
import DataObj from "../Data"

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
let obj = {};

function MultiForm(props) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);
  const formChange = (value, id) => {
    console.log("Obj", obj);
    obj = obj ? obj : {};
    console.log(value, id);
    obj[id] = value;
  };

  const handleClose = () => {
    setIndex(-1);
    setOpen(false);
  };
  const handleButtonClick = () => {
    obj = {};
    setOpen(true);
  };
  const handleSave = () => {
    if (index > -1) {
      let arr = data;
      arr[index] = obj;
      setData(arr);
    } else {
      let arr = data;
      arr.push(obj);
      setData(arr);
    }
    setIndex(-1);
    handleClose();
  };
  const [update, doUpdate] = React.useState(true);
  const [index, setIndex] = React.useState(-1);
  const handleDelete = (index) => {
  
    if(  window.confirm("Do You want to Delete this Product")){
      let arr = data;
      arr.splice(index, 1);
      setData(arr);
      doUpdate(!update);
    }
    
  };

  const handleUpdate = (index) => {
    obj = data[index];
    console.log(obj);
    setIndex(index);
    setOpen(true);
  };

  return (
  
    <div className="w-100 m-2 ">
      <div className="d-flex">
      <div className="mt-2">

<Typography > Add {" " + props.flds.Title}</Typography>
</div>
<div>
<IconButton
    aria-label="Add"
    // className={classes.closeButton}
    onClick={handleButtonClick}
  >
    <AddCircleOutlineIcon />
  </IconButton>
</div>
      </div>
   
      
     
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.flds.Title}
        </DialogTitle>
        <DialogContent dividers>
          <Form
            fldArr={props.flds.fields}
            onChange={formChange}
            fldsInRow={1}
            data={index >= 0 ? data[index] : null}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSave} color="primary">
            {index > -1 ? "Update" : "Save"}
          </Button>
        </DialogActions>
      </Dialog>
      {data.map((fld, index) => {
        return (
          <Paper elevation="2" style={{ width:"97%" ,borderRadius: "3%"}}>
            <div className="w-98 d-flex m-1">
              <div style={{ width: "75%", margin: "1%" }}>
                {Object.keys(fld).map((val) => {
                  if (val === "silderImage"||val==="productPicture") {
                    return (
                      <div className="d-flex">
                        <Typography variant="subtitle1">
                          {val + ": "}
                        </Typography>
                        <img height="100px" width="100px" src={fld[val]}></img>
                      </div>
                    );
                  } else {
                    return (
                      <div className="d-flex">
                        <Typography variant="subtitle1" style={{fontFamily:"cursive"}}>
                          {val + ": "}
                        </Typography>
                        <Typography variant="subtitle1" style={{fontFamily:"cursive"}}>
                          {" " + fld[val]}
                        </Typography>
                      </div>
                    );
                  }
                })}
              </div>
              <div className="d-flex" style={{ width: "25%" }}>
                <IconButton>
                  <EditIcon
                    onClick={() => {
                      handleUpdate(index);
                    }}
                  />
                </IconButton>
                <IconButton>
                  <DeleteIcon
                    onClick={() => {
                      handleDelete(index);
                    }}
                  />
                </IconButton>
              </div>
            </div>
          </Paper>
        );
      })}
    </div>
  );
}

export default MultiForm;
