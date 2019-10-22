import React, { useReducer } from "react";
import { reducer, todo } from "../Reducers/reducer";
import { Todo } from "./Todo";
import { Form } from "./Form";

export const List = () => {
  const [state, dispatch] = useReducer(reducer, todo);

  return (
    <div>
      <Form dispatch={dispatch} />
      <div className="tasks">
        {state.map(todo => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
      </div>
    </div>
  );
};
