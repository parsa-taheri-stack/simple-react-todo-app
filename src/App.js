import "./App.css";

// importing modules
import React, { useState } from "react";
import Task from "./components/Task/Task";
import Form from "./components/Form/Form";

const App = () => {
  const [tasks, setTasks] = useState([]);
  // add new task function
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  // update task with id
  const updateTask = (id, newValue) => {
    const updatedTasks = tasks.map((element, index) => {
      if (element.id === id) {
        return { id: element.id, value: newValue, complate: element.complate };
      }
      return element;
    });
    setTasks(updatedTasks);
  };
  // remove tasks with id
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // app jsx
  return (
    <div className="app">
      <Form onPlay={addTask} />
      <div className="task-list">
        {tasks.length === 0 ? (
          <span>there is no task</span>
        ) : (
          tasks.map((element, index) => {
            return (
              <Task
                key={element.id}
                task={element}
                update={updateTask}
                remove={removeTask}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default App;
