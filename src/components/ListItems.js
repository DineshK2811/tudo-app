import axios from "axios";
import React, { Fragment, useEffect } from "react";
import UsersDetails from "./UsersDetails";

const ListItems = (props) => {
  const { user, setUser,getApi } = props;

  const deleteUser = (id) => {
    console.log("delete clicked");
    // const newUser = props.user.filter((user) => user.id !== id);
    // console.log(newUser);
    // props.setUser(newUser);
    // useEffect(()=>{
      axios.delete(`http://localhost:8080/todo/api/deleteTodo/${id}`)
      .then(e=>{
        console.log(e.statusText);
        props.getApi();
      })
      .catch(e=>{

      })
    // },[])
  };
  return (
    <div>
      <div >
        {user
          ? user.map((data) => {
              return (
                <Fragment key={data.id}>
                  <UsersDetails
                    data={data}
                    user={user}
                    setUser={setUser}
                    deleteUser={() => deleteUser(data.id)}
                    getApi={getApi}
                  />
                </Fragment>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default ListItems;
