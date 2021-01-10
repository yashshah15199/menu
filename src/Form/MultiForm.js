import React from "react";
import { Button } from "@material-ui/core";
import "./MultiForm.css";
import { Dialog, withStyles, Paper } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Form from "../Form";

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

function MultiForm(props) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);
  let obj = {};
  const formChange = (value, id) => {
    console.log(value, id);
    obj[id] = value;
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleButtonClick = () => {
    obj = {};
    setOpen(true);
  };
  const handleSave = () => {
    let arr = data;
    arr.push(obj);
    setData(arr);
    handleClose();
  };
  return (
    <div className="m-2">
      <Button
        className="button"
        variant="contained"
        onClick={handleButtonClick}
      >
        Add {" " + props.flds.Title}
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.flds.Title}
        </DialogTitle>
        <DialogContent dividers>
          <Form fldArr={props.flds.fields} onChange={formChange} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      {data.map((fld) => {
        return (
          <Paper elevation="2" style={{ borderRadius: "3%", margin: "1%" }}>
            <div className="w-100 d-flex m-1">
              <div style={{ width: "75%", margin: "1%" }}>
                {Object.keys(fld).map((val) => {
                  if (val === "silderImage") {
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
                        <Typography variant="subtitle1">
                          {val + ": "}
                        </Typography>
                        <Typography variant="subtitle1">
                          {" " + fld[val]}
                        </Typography>
                      </div>
                    );
                  }
                })}
               
              </div>
              <div className="d-flex" style={{ width: "25%" }}>
                <IconButton>
                  <EditIcon />
                </IconButton>
                <IconButton>
                  <DeleteIcon />
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
