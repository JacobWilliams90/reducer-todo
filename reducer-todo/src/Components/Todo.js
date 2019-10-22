import React from "react";

export function Todo({ todo, dispatch }) {
  const toggleCompleted = () => {
    dispatch({
      type: "TOGGLE_COMPLETE",
      payload: todo.id
    });
  };

  return (
    <div
      onClick={toggleCompleted}
      className={`todo${todo.completed ? "completed" : ""}`}
    >
      <p>{todo.item}</p>
    </div>
  );
}
