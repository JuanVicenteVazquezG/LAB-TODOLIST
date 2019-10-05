import React from "react";

function Button({ children, whatTodo, index }) {
  return (
    <button
      className="App-button"
      onClick={() => {
        whatTodo(index);
      }}
    >
      {children}
    </button>
  );
}

export default Button;
