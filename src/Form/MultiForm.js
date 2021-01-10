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
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
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

  const handleClose = () => {
    setOpen(false);
  };
  const handleButtonClick = () => {
    setOpen(true);
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
          <Form fldArr={props.flds.fields} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
     <Paper elevation="2" style={{borderRadius:"3%", margin:"1%"}}>
         <div className="w-100 d-flex m-1">
             <div style={{width:"75%", margin:"1%"}}>
             <div className="d-flex">
         <Typography variant="subtitle1">Title:</Typography>
         <Typography variant="subtitle1">{" "+"Abc"}</Typography>

         </div>
         <div className="d-flex ">
         <Typography variant="subtitle1">Sub Title:</Typography>
         <Typography variant="subtitle1">{" "+"Abc"}</Typography>

         </div>
             </div>
             <div className="d-flex" style={{width:"25%"}}>
                 <IconButton>
<EditIcon/>
                 </IconButton>
                 <IconButton>
<DeleteIcon/>
                 </IconButton>
             </div>
         </div>
         

     </Paper>
    </div>
  );
}

export default MultiForm;
