import React, { useState } from "react";

function TodoItem({ todo, deleteTodo, updateTodo, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim()) {
      updateTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <li className="todo-item">
      {/* Checkbox for completed status */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        className="todo-checkbox"
      />
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="todo-input-edit"
        />
      ) : (
        <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
          {todo.text}
        </span>
      )}
      <div className="todo-actions">
        {isEditing ? (
          <button onClick={handleSave} className="btn-save">
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="btn-edit">
            Edit
          </button>
        )}
        <button onClick={() => deleteTodo(todo.id)} className="btn-delete">
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
