import React from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const ToDo = ({ task, deleteTask, editTaskStatus, setCompleted }) => {
  return (
    <div className="ToDo">
      <p
        className={`${task.isCompleted ? "completed-text" : "todo-text"}`}
        onClick={() => setCompleted(task)}
      >
        {task.task}
      </p>
      <div className="icons">
        <MdDelete className="deleteIcon" onClick={() => deleteTask(task.id)} />
        <FaEdit className="editIcon" onClick={() => editTaskStatus(task.id)} />
      </div>
    </div>
  );
};

export default ToDo;
