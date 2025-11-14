import "./Form.css";

//importing modules
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const Form = ({ onPlay }) => {
  const [value, setValue] = useState("");
  const task = { id: uuid(), value: value, complate: false };
  const handleAddingTask = (newTask) => {
    onPlay(newTask);
    setValue("");
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <h2> Add task </h2>
      <div className="form">
        <input
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleAddingTask(task);
            }
          }}
          className="input-task"
          value={value}
          onChange={handleChange}
          placeholder="Enter task title ...."
        />
        <button
          className="btn "
          onClick={() => {
            handleAddingTask(task);
          }}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default Form;
