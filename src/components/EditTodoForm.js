import React, { useState } from 'react'

const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        className="todo-input"
        placeholder="Update Your Task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Edit Task
      </button>
    </form>
  )
}

export default EditTodoForm