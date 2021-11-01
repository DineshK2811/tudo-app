import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Form = (props) => {
  const { user, setUser } = props;
  const [enteredData, setEnteredData] = useState();

  const changeHandler = (e) => {
    setEnteredData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // const SaveTodo=(data,arrCpy)=>{
  //   useEffect(()=>{
  //     axios.post('localhost:8080/todo/api/save/todo',data)
  //     .then(e=>{
  //       setUser(arrCpy);
  //     }).catch(e=>{
  //       console.log(e);
  //     })
  //   },[]);
  // }
  const OnaddUserHandler = (e) => {
      const arrCpy = [...user];
      const data = {
        // id: Math.trunc(Math.random() * 100) + 1,
        title: enteredData.title,
        description: enteredData.description,
      };
      // arrCpy.push(data);
      axios.post('http://localhost:8080/todo/api/save/todo',data)
      .then(e=>{
        // 
        console.log('todo saved');
        props.getApi();
      }).catch(e=>{
        console.log(e);
      })
      // SaveTodo(data, arrCpy); 
      setEnteredData("");
      
  };

  useEffect(()=>{
   
  },[]);
  return (
    <div>
      <Card
        sx={{
          maxWidth: 400,
          height: 200,
          justifyContent: "center",
          marginTop: 2,
          marginLeft: 70,
        }}
      >
        <CardContent>
          <Grid>
            <TextField
              id="standard-basic"
              label="Title"
              name="title"
              value={enteredData ? enteredData.title : ""}
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
              value={enteredData ? enteredData.description : ""}
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
          <Grid>
            <Button
              variant="contained"
              style={{ marginTop: 10 }}
              onClick={OnaddUserHandler}
            >
              Add Todo
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;
