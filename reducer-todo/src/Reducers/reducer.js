export const todo = [];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          item: action.payload,
          id: Date.now(),
          completed: false
        }
      ];

    case "TOGGLE_COMPLETE":
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });

    case "CLEAR_COMPLETE":
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};
