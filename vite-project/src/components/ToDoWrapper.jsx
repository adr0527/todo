import React, { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import { v4 as uuid } from "uuid";
import EditToDoForm from "./EditToDoForm";

const ToDoWrapper = () => {
  const [todo, setTodo] = useState([]);

  

  const addTask = (task) => {
    setTodo([
      ...todo,
      { id: uuid(), task: task, isCompleted: false, isEditing: false },
    ]);
    console.log(todo);
  };

  const deleteTask = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const editTaskStatus = (id) => {
    setTodo(
      todo.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (taskName, id) => {
    setTodo(
      todo.map((todo) =>
        todo.id === id
          ? { ...todo, isEditing: !todo.isEditing, task: taskName }
          : todo
      )
    );
  };

  const setCompleted = (id) => { 
    console.log("completed")
    setTodo(todo.map((todo) => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo ))
    console.log(todo)
  }

  return (
    <div className="ToDoWrapper">
      <h1>What is the task today?</h1>
      <ToDoForm addTask={addTask} />
      {todo.map((t) => {
        return t.isEditing === true ? (
          <EditToDoForm editTask={editTask} task={t} />
        ) : (
          <ToDo
            key={t.id}
            task={t}
            deleteTask={deleteTask}
            editTaskStatus={editTaskStatus}
            setCompleted={setCompleted}
          />
        );
      })}
    </div>
  );
};

export default ToDoWrapper;
