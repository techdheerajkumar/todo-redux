import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  deleteItem } from "../redux/slices/counter/dataBaseSlice";
const TaskView = () => {
  const database = useSelector((state) => state.dataBase); // Reading value from redux state use 'useSelector'
  const dispatch = useDispatch();
  const deleteHandler = (el) =>{
     dispatch(deleteItem(el))   
  }
  return (
    <>
      <div className="todo-view">
        <h2>Todo List</h2>
        {database.length ? (
          <ul className="p-0">
            {database.map((item, index) => {
              return (
                <li 
                  className="d-flex flex-column text-left align-items-start"
                  key={index}
                >
                  <h4>
                    {item.firstName} {item.lastName}
                  </h4>
                  <p>{item.description}</p>
                  <div className="btn-wrapper d-flex">
                    <button className="btn btn-info me-3">Edit</button>
                    <button className="btn btn-danger" onClick={() => deleteHandler(item.id)}>Delete</button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          "No data"
        )}
      </div>
    </>
  );
};
export default TaskView;
