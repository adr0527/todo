import React, { useState, useRef } from "react";
const ToDoForm = ({ addTask }) => {
  const [value, setValue] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    if (value) { 
        addTask(value)
        setValue('')
    }
  };

  return (
    <div>
      <form className="ToDoForm" onSubmit={submitForm}>
        <input
          type="text"
          className="todo-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="todo-submit-btn">Add Task</button>
      </form>
    </div>
  );
};

export default ToDoForm;
