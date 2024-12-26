import React, { useState } from "react";

const EditToDoForm = ({editTask, task}) => {
    const [value, setValue] = useState(task.task)

    const submitForm = (e) => { 
        e.preventDefault()
        editTask(value, task.id)
    }

  return (
    <div>
      <form className="ToDoForm" onSubmit={submitForm}>
        <input
          type="text"
          className="todo-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="todo-submit-btn">Edit Task</button>
      </form>
    </div>
  );
};

export default EditToDoForm;
