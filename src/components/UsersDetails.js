import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

function UsersDetails(props) {
  const { id, title, description } = props.data;
  const { user, setUser, data} = props;
  const [open, setOpen] = useState(false);
  const [updateData, setUpdateData] = useState();

  const handleClickOpen = () => {
    console.log(data);
    setUpdateData(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeHandler = (e) => {
    setUpdateData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
   
  };

  const onUpdateHandler = (id) => {
    console.log("update triggered", id);
    const cpyArr = [...user];
    // cpyArr.forEach((u) => {
      // if (u.id === id) {
      //   // u.title = updateData.title;
      //   // u.description = updateData.description;
      // }
      const data={
        id:id,
        title:updateData.title,
        description:updateData.description,
      }
      axios.put('http://localhost:8080/todo/api/updateTodo',data)
      .then(e=>{
        props.getApi();
      })
      .catch(e=>{});
    // });
    // setUser(cpyArr);
    handleClose();
  };
  return (
    <div style={{ marginLeft: 60, marginTop: 15, float: "left" }}>
      <Card sx={{ width: 275, height:'auto'}}>
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
            style={{ textAlign: "left" }}
          >
            <h3 style={{color:'#6495ED'}}> {title}</h3>
            <p style={{fontSize:16,marginLeft:8}}> {description}</p>
          </Typography>
        </CardContent>
        <Button
          variant="outlined"
          onClick={() => props.deleteUser(props.id)}
          style={{
            float: "left",
            display: "inline-block",
            marginLeft: 80,
            marginRight: 0,
          }}
        >
          Delete
        </Button>
        {/* <UpdateUserDetails id={id} name={name} age={age} /> */}

        <Button variant="outlined" onClick={handleClickOpen}>
          Update
        </Button>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Details</DialogTitle>
        <DialogContent>
          <Grid>
            <TextField
              id="standard-basic"
              label="Title"
              name="title"
              value={updateData ? updateData.title : ""}
              variant="standard"
              style={{ width: 300, float: "left", marginBottom: 5 }}
              onChange={changeHandler}
            />
          </Grid>
          <Grid>
            <TextField
              id="standard-basic"
              label="Description"
              name="description"
              value={updateData ? updateData.description : ""}
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
}

export default UsersDetails;
