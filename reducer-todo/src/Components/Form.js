import React, { useState } from "react";
import styled from "styled-components";

export const Form = ({ dispatch }) => {
  const [item, setItem] = useState("");

  const handleChanges = event => {
    setItem(event.target.value);
  };

  const submitForm = event => {
    event.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: item
    });
    setItem("");
  };

  const clearCompleted = event => {
    event.preventDefault();
    dispatch({
      type: "CLEAR_COMPLETE"
    });
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={submitForm}>
        <input
          name="todo"
          onChange={handleChanges}
          value={item}
          placeholder="Todo task here"
          required
        />
        <span className="buttons">
          <button>Add Item</button>
          <button onClick={clearCompleted}>Clear Item</button>
        </span>
      </form>
    </div>
  );
};
