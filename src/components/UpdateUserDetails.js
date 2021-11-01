import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const UpdateUserDetails = (props) => {
  const { id, name, age } = props;
  const [open, setOpen] = useState(false);
  const [updateData, setUpdateData] = useState();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    const cpyArr = [];

    setOpen(false);
  };

  const changeHandler = (e) => {
    setUpdateData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(updateData);
  };

  const onUpdateHandler = (id) => {
    console.log("update triggered", id);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Update
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Details</DialogTitle>
        <DialogContent>
          <Grid>
            <TextField
              id="standard-basic"
              label="Name"
              name="name"
              //   value={props.user ? props.user.name : ""}
              variant="standard"
              style={{ width: 300, float: "left", marginBottom: 5 }}
              onChange={changeHandler}
            />
          </Grid>
          <Grid>
            <TextField
              id="standard-basic"
              label="Age"
              name="age"
              //   value={enteredData ? enteredData.age : ""}
              variant="standard"
              style={{
                width: 300,
                float: "left",
                marginTop: 5,
                marginBottom: 5,
              }}
              onChange={changeHandler}
            />
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => onUpdateHandler(id)}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UpdateUserDetails;
