import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, updateItem } from "../redux/slices/counter/dataBaseSlice";
const TaskView = () => {
  let [updatedData, setUpdateData] = useState({
    firstName: '',
    lastName: '',
    description:'',
    id:null
  });
  const [editingId, setEditingId] = useState("");
  const database = useSelector((state) => state.dataBase); // Reading value from redux state use 'useSelector'
  const dispatch = useDispatch();
  const deleteHandler = (el) => {
    dispatch(deleteItem(el));
  };

  const editItem = (id) => {
    setEditingId(id);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUpdateData((prev)=>({
        ...prev,
        [name]: value
    }));
  };
  const clickHandler = (e) => {    
    e.preventDefault();
    const withId = {
        ...updatedData,
        id: editingId
    }
    dispatch(updateItem(withId))
    setEditingId(null)
    setUpdateData({
        firstName: '',
        lastName: '',
        description:'',
        id:null
      })
  };
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
                    <button
                      className="btn btn-info me-3"
                      onClick={() => editItem(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteHandler(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                  {item.id === editingId ? (
                    <form
                      onSubmit={clickHandler}
                      className="d-flex flex-column"
                    >
                      <div className="d-flex flex-column mb-3">
                        <div className="input-wrapper d-flex flex-column">
                          <input
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="First name"
                            value={updatedData.firstName}
                            className="mb-3"
                          />
                          <input
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Last name"
                            value={updatedData.lastName}
                            className="mb-3"
                          />
                        </div>

                        <textarea
                          name="description"
                          placeholder="Description"
                          id=""
                          onChange={changeHandler}
                          value={updatedData.description}
                        ></textarea>
                      </div>

                      <input
                        type="submit"
                        value="Update"
                        className="btn btn-success"
                      />
                    </form>
                  ) : null}
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
