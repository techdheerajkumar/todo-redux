import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInputValue, setId } from "../redux/slices/counter/userDataSlice";
import { storeData } from "../redux/slices/counter/dataBaseSlice";

const TaskForm = () => {
  const userData = useSelector((state) => state.userInput);
  let [counter, setCounter] = useState(0)
  const dispatch = useDispatch(); // Sending any value to state, use dispatch()
  const changeHandler = (e) => {
    const { name, value } = e.target;
    dispatch(setInputValue({ name, value }));
  };

  const clickHandler = (e) => {
    e.preventDefault();
    
    if (userData.firstName !== "" && userData.lastName !== "" && userData.description !== '') {   
      setCounter(counter+1)
      const userDataWithId = {
        ...userData,
        id: counter 
      }
      dispatch(setInputValue({ name: "firstName", value: "" }));
      dispatch(setInputValue({ name: "lastName", value: "" }));
      dispatch(setInputValue({ name: "description", value: "" }));

      dispatch(storeData(userDataWithId));
      dispatch(setId(counter))
    }
  };
  return (
    <>
      <h1>Todo Redux</h1>
      <form onSubmit={clickHandler} className="d-flex flex-column">
        <div className="d-flex flex-column mb-3">
          <div className="input-wrapper d-flex flex-column">
            <input
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="First name"
              value={userData.firstName}
              className="mb-3"
            />
            <input
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Last name"
              value={userData.lastName}
              className="mb-3"
            />
          </div>

          <textarea
            name="description"
            placeholder="Description"
            id=""
            onChange={changeHandler}
            value={userData.description}
          ></textarea>
        </div>

        <input type="submit" value="Add" className="btn btn-success"/>
      </form>
    </>
  );
};

export default TaskForm;
