import "./Task.css";

// importing modules
import React, { useState } from "react";

const Task = ({ task, update, remove }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(task.value);
  const handleUpdate = (event) => {
    setValue(event.target.value);
    update(task.id, value);
  };
  const handleRemove = (event) => {
    remove(event.target.id);
  };
  return (
    <div className="task">
      {!isEditing ? (
        <>
          <span className="task-text">{value}</span>
          <button
            className="btn"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            edit
          </button>
        </>
      ) : (
        <>
          <input value={value} onChange={handleUpdate} className="edit-input" />
          <button
            className="btn"
            onClick={() => {
              setIsEditing(false);
            }}
          >
            save
          </button>
        </>
      )}
      <button className="btn" id={task.id} onClick={handleRemove}>
        remove
      </button>
    </div>
  );
};

export default Task;
