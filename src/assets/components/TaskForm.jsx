import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInputValue, storeData } from "../redux/slices/counter/userDataSlice";

const TaskForm = () => {
  const userData = useSelector((state) => state.userInput);
  const db = useSelector((state) => state.userInput)
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    const { name, value } = e.target;

    dispatch(setInputValue({ name, value }));
    console.log(userData);
    console.log(db);
  };

 const clickHandler = () =>{
    dispatch(()=>{storeData})
    console.log(db)
  }
  return (
    <>
      <h1>Multiply by</h1>
      <input
        type="text"
        name="firstName"
        onChange={changeHandler}
        placeholder="First name"
        value={userData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={changeHandler}
        placeholder="Last name"
        value={userData.lastName}
      />
      <input type="submit" value="Add" onClick={clickHandler}/>
    </>
  );
};

export default TaskForm;
